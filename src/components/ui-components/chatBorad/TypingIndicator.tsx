import React from "react";

const TypingIndicator = () => {
  return (
    <div className="flex w-full justify-start chat-enter">
      <div className="max-w-[60%] rounded-2xl rounded-bl-sm bg-secondary px-3 py-2 text-sm text-secondary-foreground shadow-sm">
        <span
          className="inline-flex items-end gap-1"
          aria-label="Assistant is typing"
        >
          <span className="sr-only">Typing…</span>
          <span className="typing-dot" />
          <span className="typing-dot" style={{ animationDelay: "0.12s" }} />
          <span className="typing-dot" style={{ animationDelay: "0.24s" }} />
        </span>
      </div>
    </div>
  );
};

export default TypingIndicator;
