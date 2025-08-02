import type { TierType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Sparkles, Gem, Crown, Star } from "lucide-react"

interface TierBadgeProps {
  tier: TierType
  className?: string
}

const tierIcons = {
  free: Sparkles,
  silver: Gem,
  gold: Crown,
  platinum: Star,
}

const tierStyles = {
  free: "bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 border border-slate-300",
  silver: "bg-gradient-to-r from-slate-200 to-slate-300 text-slate-800 border border-slate-400 shadow-sm",
  gold: "bg-gradient-to-r from-yellow-200 to-yellow-300 text-yellow-800 border border-yellow-400 shadow-md",
  platinum: "bg-gradient-to-r from-purple-200 to-purple-300 text-purple-800 border border-purple-400 shadow-lg",
}

export function TierBadge({ tier, className }: TierBadgeProps) {
  const Icon = tierIcons[tier]

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase transition-all duration-200 hover:scale-105",
        tierStyles[tier],
        className,
      )}
    >
      <Icon className="h-3 w-3 mr-1.5" />
      {tier}
    </span>
  )
}
