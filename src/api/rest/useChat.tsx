import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ApiEndpoints } from "../endpoints";

interface ChatMessage {
  sessionId: string;
  action: string;
  chatInput: string;
  role: "user" | "assistant";
  time: string;
}

export const useChat = () => {
  return useMutation({
    mutationFn: async (data: ChatMessage) => {
      const response = await axios.post(ApiEndpoints.WEBHOOK_URL, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      console.log("Response:", data);
    },
    onError: (error) => {
      console.error("Error:", error);
      alert("Something went wrong!");
    },
  });
};
