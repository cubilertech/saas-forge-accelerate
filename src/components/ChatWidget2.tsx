"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { id: "m1", role: "assistant", content: "Hi! How can we help today?" },
    { id: "m2", role: "user", content: "Do you support refunds?" },
    {
      id: "m3",
      role: "assistant",
      content: "Yes—happy to help. What’s your order ID?",
    },
  ]);
  const [input, setInput] = React.useState("");
  const scrollRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    // Scroll to bottom when opening or after new message
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [open, messages.length]);

  function handleSend(e?: React.FormEvent) {
    e?.preventDefault();
    const text = input.trim();
    if (!text) return;
    const newMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
  }

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          type="button"
          aria-label={open ? "Close support chat" : "Open support chat"}
          aria-expanded={open}
          aria-controls="support-chat-panel"
          onClick={() => setOpen((v) => !v)}
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
          "bottom-24 ",
          // width/height
          "w-[calc(100vw-2rem)] max-w-sm md:max-w-md",
          // animation container
          "transition-all duration-300 ease-out",
          open
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
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
              {"Chat Board 💬"}
            </h2>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md text-foreground/70 hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              aria-label="Close chat"
            >
              <span aria-hidden>✖️</span>
            </button>
          </header>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 space-y-3 overflow-y-auto px-3 py-4"
          >
            {messages.map((m) => (
              <MessageBubble key={m.id} role={m.role} text={m.content} />
            ))}
          </div>

          {/* Composer */}
          <form onSubmit={handleSend} className="border-t p-3">
            <div className="flex items-center gap-2">
              <label htmlFor="chat-input" className="sr-only">
                Type your message
              </label>
              <input
                id="chat-input"
                className={cn(
                  "flex-1 rounded-full border bg-background px-4 py-2 text-sm",
                  "placeholder:text-foreground/50",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
                )}
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                className={cn(
                  "inline-flex items-center gap-1 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
                  "shadow-md transition-all hover:scale-[1.03] hover:brightness-[1.03]",
                  "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50"
                )}
                aria-label="Send message"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h9M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Send</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

function MessageBubble({
  role,
  text,
}: {
  role: Message["role"];
  text: string;
}) {
  const isUser = role === "user";
  return (
    <div
      className={cn("flex w-full", isUser ? "justify-end" : "justify-start")}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-2xl px-3 py-2 text-sm shadow-sm",
          "transition-colors",
          isUser
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "bg-secondary text-secondary-foreground rounded-bl-sm"
        )}
      >
        {text}
      </div>
    </div>
  );
}
