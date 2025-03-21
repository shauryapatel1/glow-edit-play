
// This file is kept for backward compatibility
// It re-exports all animations from the new modular structure
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to combine class names with Tailwind
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Re-export all animations from the new structure
export * from './animations';
