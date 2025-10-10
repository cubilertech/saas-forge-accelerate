import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleTestimonialClick = (link: string) => {
  if (link) {
    window.open(link, "_blank");
  }
};
