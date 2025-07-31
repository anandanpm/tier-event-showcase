import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TierType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tierOrder: Record<TierType, number> = {
  free: 0,
  silver: 1,
  gold: 2,
  platinum: 3,
};

export function canAccessEvent(userTier: TierType, eventTier: TierType): boolean {
  return tierOrder[userTier] >= tierOrder[eventTier];
}

export function getTierColor(tier: TierType): string {
  const colors = {
    free: 'bg-gray-500 text-white',
    silver: 'bg-gray-400 text-white',
    gold: 'bg-yellow-500 text-white',
    platinum: 'bg-purple-500 text-white',
  };
  return colors[tier];
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}