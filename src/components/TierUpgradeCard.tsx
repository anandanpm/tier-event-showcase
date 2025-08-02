"use client"

import type { TierType } from "@/lib/types"
import { TierBadge } from "./TierBadge"
import { Lock, ArrowUp, CheckCircle, Sparkles, Crown, Gem } from "lucide-react"
import { useState } from "react"
import { useUserTier } from "@/hooks/use-user-tier"

interface TierUpgradeCardProps {
  requiredTier: TierType
  eventTitle: string
}

const tierUpgrades: Record<TierType, TierType[]> = {
  free: ["silver", "gold", "platinum"],
  silver: ["gold", "platinum"],
  gold: ["platinum"],
  platinum: [],
}

const tierIcons = {
  free: Sparkles,
  silver: Gem,
  gold: Crown,
  platinum: Crown,
}

const tierGradients = {
  free: "from-slate-400 to-slate-600",
  silver: "from-slate-300 to-slate-500",
  gold: "from-yellow-400 to-yellow-600",
  platinum: "from-purple-400 to-purple-600",
}

export function TierUpgradeCard({ requiredTier, eventTitle }: TierUpgradeCardProps) {
  const { tier: currentTier, upgradeTier, isLoading } = useUserTier()
  const [isUpgrading, setIsUpgrading] = useState(false)
  const [upgradeSuccess, setUpgradeSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const availableUpgrades = tierUpgrades[currentTier]

  const handleUpgrade = async (newTier: TierType) => {
    setIsUpgrading(true)
    setUpgradeSuccess(false)
    setError(null)

    try {
      const result = await upgradeTier(newTier)

      if (result.success) {
        console.log(`Successfully upgraded to ${newTier} tier!`)
        setUpgradeSuccess(true)

        // Show success message briefly before reload
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } else {
        setError(result.error || `Failed to upgrade to ${newTier} tier`)
      }
    } catch (error) {
      console.error("Failed to upgrade tier:", error)
      setError("Network error. Please try again.")
    } finally {
      setIsUpgrading(false)
    }
  }

  if (isLoading) {
    return (
      <div className="group relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-2xl border-2 border-dashed border-slate-300 shadow-lg">
        <div className="relative p-8 text-center">
          <div className="animate-pulse">
            <div className="bg-slate-200 rounded-full h-16 w-16 mx-auto mb-6"></div>
            <div className="bg-slate-200 rounded h-6 w-48 mx-auto mb-4"></div>
            <div className="bg-slate-200 rounded h-4 w-32 mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  // Show success state
  if (upgradeSuccess) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl border border-emerald-200 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10"></div>
        <div className="relative p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-emerald-500 rounded-full p-3">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-emerald-800 mb-3">🎉 Upgrade Successful!</h3>
          <p className="text-emerald-700 text-lg">Refreshing page to show your new events...</p>
          <div className="mt-4">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 rounded-full text-emerald-800 text-sm font-medium">
              <Sparkles className="h-4 w-4 mr-2" />
              Welcome to your new tier!
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="relative overflow-hidden bg-gradient-to-br from-red-50 via-red-50 to-red-100 rounded-2xl border border-red-200 shadow-lg">
        <div className="relative p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-500 rounded-full p-3">
              <Lock className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-red-800 mb-3">Upgrade Failed</h3>
          <p className="text-red-700 mb-4">{error}</p>
          <button
            onClick={() => setError(null)}
            className="px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  const RequiredTierIcon = tierIcons[requiredTier]

  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 rounded-2xl border-2 border-dashed border-slate-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-slate-400">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative p-8 text-center">
        {/* Lock Icon with Glow Effect */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-slate-400 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-gradient-to-br from-slate-400 to-slate-600 rounded-full p-4 shadow-lg">
              <Lock className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-slate-800 mb-3">Premium Event Locked</h3>

        {/* Event Title */}
        <div className="bg-slate-100 rounded-xl p-4 mb-6 border border-slate-200">
          <p className="text-slate-700 font-medium text-lg">"{eventTitle}"</p>
          <div className="flex items-center justify-center mt-3 space-x-2">
            <span className="text-slate-600">Requires</span>
            <TierBadge tier={requiredTier} className="shadow-sm" />
            <span className="text-slate-600">tier</span>
          </div>
        </div>

        {/* Current Tier */}
        <div className="flex items-center justify-center mb-6 space-x-2 text-sm">
          <span className="text-slate-500">Your current tier:</span>
          <TierBadge tier={currentTier} className="shadow-sm" />
        </div>

        {/* Upgrade Options */}
        {availableUpgrades.length > 0 && (
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="h-4 w-4 text-slate-500" />
              <p className="text-slate-600 font-medium">Available upgrades</p>
              <Sparkles className="h-4 w-4 text-slate-500" />
            </div>

            <div className="grid gap-3">
              {availableUpgrades.map((tier) => {
                const TierIcon = tierIcons[tier]
                const gradient = tierGradients[tier]

                return (
                  <button
                    key={tier}
                    onClick={() => handleUpgrade(tier)}
                    disabled={isUpgrading}
                    className={`group/btn relative overflow-hidden bg-gradient-to-r ${gradient} rounded-xl p-4 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200`}
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <div className="relative flex items-center justify-center space-x-3">
                      <TierIcon className="h-5 w-5" />
                      <span className="text-lg">
                        {isUpgrading ? "Upgrading..." : `Upgrade to ${tier.toUpperCase()}`}
                      </span>
                      <ArrowUp className="h-5 w-5 group-hover/btn:translate-y-[-2px] transition-transform" />
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 -top-2 -left-2 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 w-6 group-hover/btn:animate-pulse"></div>
                  </button>
                )
              })}
            </div>

            {/* Benefits hint */}
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-center justify-center space-x-2 text-blue-700">
                <Crown className="h-4 w-4" />
                <span className="text-sm font-medium">Unlock exclusive events and premium content</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
