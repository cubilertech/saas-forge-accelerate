import * as React from "react";
import { cn } from "@/lib/utils";
import { Mic, Send } from "lucide-react";
import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { Message } from "@/types";
const STORAGE_KEY = "chat_messages";
import { useChat } from "@/api/rest/useChat";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { closeChat, toggleChat } from "@/store/chatSlice";

const getInitialMessages = (): Message[] => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error loading messages from localStorage:", error);
  }
  // Default messages if nothing in localStorage
  return [
    {
      sessionId: "m1",
      action: "sendMessage",
      role: "assistant",
      chatInput: "Hi! How can we help today?",
      time: "11:45 AM",
    },
  ];
};

export default function ChatWidget() {
  const dispatch = useAppDispatch();
  const { isOpen: open, isHidden } = useAppSelector((state) => state.chat);

  const [messages, setMessages] = React.useState<Message[]>(
    getInitialMessages()
  );
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [isListening, setIsListening] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement | null>(null);
  const { mutate, isPending } = useChat();

  // refs to clear timeouts on unmount
  const sendTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const botTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(
    null
  );
  const recognitionRef = React.useRef<any>(null);

  // Save messages to localStorage whenever they change
  React.useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (error) {
      console.error("Error saving messages to localStorage:", error);
    }
  }, [messages]);

  React.useEffect(() => {
    if (!open) return;
    // Scroll to bottom when opening, on new message, or typing state change
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [open, messages.length, typing]);

  React.useEffect(() => {
    // clear timeouts if component unmounts
    return () => {
      if (sendTimeoutRef.current) clearTimeout(sendTimeoutRef.current);
      if (botTimeoutRef.current) clearTimeout(botTimeoutRef.current);
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  function startListening() {
    // Check if browser supports speech recognition
    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {
      console.error("Speech recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      console.log("You said:", transcript);
      setInput(transcript);
    };

    recognition.onerror = (err: any) => {
      console.error("Speech recognition error:", err);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }

  function stopListening() {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }

  function toggleVoiceInput() {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }

  // function generateBotReply(userText: string): string {
  //   // Simple demo reply; could be replaced with real API
  //   if (userText.toLowerCase().includes("refund")) {
  //     return "We can help with refunds. Could you share your order ID?";
  //   }
  //   return "Thanks! A support agent will reply shortly. Do you have any additional details?";
  // }

  // function handleSend(e?: React.FormEvent) {
  //   e?.preventDefault();
  //   const text = input.trim();
  //   if (!text) return;

  //   setInput("");

  //   // Add the user's message after a short delay for a smooth feel
  //   sendTimeoutRef.current = setTimeout(() => {
  //     const newMsg: Message = {
  //       id: crypto.randomUUID(),
  //       role: "user",
  //       content: text,
  //     };
  //     setMessages((prev) => [...prev, newMsg]);

  //     // Start typing indicator and simulate bot reply
  //     setTyping(true);
  //     const reply = generateBotReply(text);
  //     botTimeoutRef.current = setTimeout(() => {
  //       setMessages((prev) => [
  //         ...prev,
  //         { id: crypto.randomUUID(), role: "assistant", content: reply },
  //       ]);
  //       setTyping(false);
  //     }, 1200); // bot "thinking" time
  //   }, 180); // subtle entry delay
  // }

  // const sendMessage = async (e?: React.FormEvent) => {
  //   e?.preventDefault();
  //   const text = input.trim();
  //   if (!text) return;

  //   setInput("");

  //   try {
  //     const res = await fetch("http://192.168.18.76:5000/chat", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         user_id: "123",
  //         message: input,
  //         role: "user",
  //       }),
  //     });

  //     // if (!res.ok) throw new Error("Network response was not ok");

  //     const data = await res.json();
  //     console.log("Server response:", data);
  //     // setResponse(data.reply || JSON.stringify(data));
  //   } catch (error) {
  //     console.error("Error sending message:", error);
  //     // setResponse("Error: " + (error as Error).message);
  //   }
  //   // finally {
  //   //   setLoading(false);
  //   // }
  // };

  const handleSendMessage = (e?: React.FormEvent) => {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;

    // Add user message to the chat immediately
    const newMsg: Message = {
      sessionId: crypto.randomUUID(),
      action: "sendMessage",
      chatInput: text,
      role: "user",
      // message: text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");

    // Send to server
    mutate(newMsg, {
      onSuccess: (data) => {
        // Extract and clean the response text
        let responseText =
          data.reply ||
          data.message ||
          data.output ||
          JSON.stringify(data.output);

        // Remove surrounding quotes if they exist
        if (
          typeof responseText === "string" &&
          responseText.startsWith('"') &&
          responseText.endsWith('"')
        ) {
          responseText = responseText.slice(1, -1);
        }

        // Add the bot's response to messages
        const botReply: Message = {
          sessionId: crypto.randomUUID(),
          action: "sendMessage",
          role: "assistant",
          chatInput: responseText,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, botReply]);
      },
      onError: (error) => {
        console.error("Error sending message:", error);
        // Optionally show error message in chat
        const errorMsg: Message = {
          sessionId: crypto.randomUUID(),
          action: "sendMessage",
          role: "assistant",
          chatInput:
            "Sorry, I couldn't process your message. Please try again.",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, errorMsg]);
      },
    });
  };

  return (
    <>
      {/* Toggle Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 ${isHidden ? "hidden" : ""}`}
      >
        <button
          type="button"
          aria-label={open ? "Close support chat" : "Open support chat"}
          aria-expanded={open}
          aria-controls="support-chat-panel"
          onClick={() => dispatch(toggleChat())}
          className={cn(
            "relative inline-flex h-14 w-14 items-center justify-center rounded-full",
            "bg-primary text-primary-foreground shadow-xl",
            "transition-all duration-300 ease-out",
            "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50",
            "hover:scale-105 hover:brightness-105",
            // glowing hover with pseudo-element
            "after:pointer-events-none after:absolute after:inset-0 after:rounded-full",
            "after:bg-primary/30 after:blur-xl after:opacity-0 hover:after:opacity-100 after:transition-opacity"
          )}
        >
          {/* Icon swap with smooth transition */}
          <span
            className={cn(
              "absolute transition-all duration-300",
              open
                ? "opacity-0 scale-50 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            )}
            aria-hidden="true"
          >
            {/* Chat icon (speech bubble) */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 19l-4 3V6a3 3 0 013-3h12a3 3 0 013 3v10a3 3 0 01-3 3H7z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span
            className={cn(
              "absolute transition-all duration-300",
              open
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 -rotate-90"
            )}
            aria-hidden="true"
          >
            {/* Close icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </button>
      </div>

      {/* Chat Panel */}
      <div
        id="support-chat-panel"
        role="dialog"
        aria-labelledby="support-chat-title"
        aria-modal="true"
        className={cn(
          "fixed right-4 z-50",
          // position above the button on mobile, lift on larger screens
          "bottom-24",
          // width/height
          "w-[calc(100vw-2rem)] max-w-sm md:max-w-md",
          // animation container
          "transition-all duration-300 ease-out",
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none",
          isHidden ? "hidden" : ""
        )}
      >
        <section
          className={cn(
            "flex h-[28rem] flex-col overflow-hidden rounded-xl border bg-card text-card-foreground shadow-2xl",
            "backdrop-blur supports-[backdrop-filter]:bg-card/95"
          )}
        >
          {/* Header */}
          <header className="flex items-center justify-between border-b px-4 py-3">
            <h2
              id="support-chat-title"
              className="text-sm font-medium text-pretty"
            >
              {"Support Chat 💬"}
            </h2>
            <button
              type="button"
              onClick={() => dispatch(closeChat())}
              className={cn(
                "inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground/70 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              )}
              aria-label="Close chat"
            >
              <span aria-hidden>✖️</span>
            </button>
          </header>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-3 py-4"
            aria-live="polite"
            aria-atomic="false"
          >
            {messages.map((m) => (
              <MessageBubble
                key={m.sessionId}
                role={m.role}
                text={m.chatInput}
                time={m.time}
              />
            ))}

            {isPending && <TypingIndicator />}
          </div>

          {/* Composer */}
          <form onSubmit={handleSendMessage} className="border-t p-3">
            <div
              className={cn(
                "flex items-center gap-2 rounded-full border bg-background px-2 py-1.5 shadow-sm",
                "transition-colors focus-within:ring-2 focus-within:ring-ring/50"
              )}
            >
              <button
                type="button"
                onClick={toggleVoiceInput}
                aria-label={
                  isListening ? "Stop voice input" : "Start voice input"
                }
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full transition-all",
                  isListening
                    ? "bg-red-500 text-white animate-pulse"
                    : "text-foreground/70 hover:bg-secondary hover:text-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                )}
                title={isListening ? "Stop voice input" : "Start voice input"}
              >
                <span aria-hidden>
                  <Mic className={isListening ? "animate-pulse" : ""} />
                </span>
              </button>

              <label htmlFor="chat-input" className="sr-only">
                Type your message
              </label>
              <input
                id="chat-input"
                className={cn(
                  "flex-1 bg-transparent px-2 text-sm",
                  "placeholder:text-foreground/50",
                  "focus:outline-none"
                )}
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />

              <button
                disabled={!input.trim() || isPending}
                type="submit"
                aria-label="Send message"
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-full",
                  "bg-primary text-primary-foreground shadow-md  disabled:opacity-50",
                  "transition-all hover:scale-[1.04] hover:brightness-[1.03]",
                  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50"
                )}
                title="Send"
              >
                <span aria-hidden>
                  <Send size={20} />
                </span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
