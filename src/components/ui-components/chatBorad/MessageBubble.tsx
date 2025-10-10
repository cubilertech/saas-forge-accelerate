import React from "react";
import { cn } from "@/lib/utils";
import { Message } from "@/types";
import { Bot, User } from "lucide-react";

const MessageBubble = ({
  role,
  text,
  time,
}: {
  role: Message["role"];
  text: string;
  time: string;
}) => {
  const isUser = role === "user";

  return (
    <div
      className={cn(
        "flex w-full chat-enter items-end gap-2",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      {/* Bot Avatar (only for bot messages) */}
      {!isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <Bot className="w-4 h-4 text-secondary-foreground" />
          </div>
        </div>
      )}

      {/* Message bubble with text + time */}
      <div
        className={cn(
          "max-w-[75%] rounded-2xl px-3 py-2 text-sm shadow-sm transition-colors flex flex-col gap-1",
          isUser
            ? "bg-primary text-primary-foreground rounded-br-sm items-end"
            : "bg-secondary text-secondary-foreground rounded-bl-sm items-start"
        )}
      >
        <div>{text}</div>
        <span className="text-[10px]  opacity-70">{time}</span>
      </div>

      {/* User Avatar (only for user messages) */}
      {isUser && (
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
