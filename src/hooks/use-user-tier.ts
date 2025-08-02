"use client"

import { useUser } from "@clerk/nextjs"
import { useState, useEffect } from "react"
import type { TierType } from "@/lib/types"

export function useUserTier() {
  const { user, isLoaded } = useUser()
  const [tier, setTier] = useState<TierType>("free")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoaded && user) {
      // Get tier from publicMetadata (server-controlled)
      const userTier = (user.publicMetadata?.tier as TierType) || "free"
      setTier(userTier)
      setIsLoading(false)

      // Initialize tier if not set
      if (!user.publicMetadata?.tier) {
        initializeTier()
      }
    } else if (isLoaded && !user) {
      setIsLoading(false)
    }
  }, [isLoaded, user])

  const initializeTier = async () => {
    try {
      const response = await fetch("/api/user/tier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: "free" }),
      })

      if (response.ok) {
        // Reload user to get updated metadata
        await user?.reload()
        setTier("free")
      }
    } catch (error) {
      console.error("Failed to initialize tier:", error)
    }
  }

  const upgradeTier = async (newTier: TierType) => {
    if (!user) return { success: false, error: "No user found" }

    try {
      const response = await fetch("/api/user/tier", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier: newTier }),
      })

      if (response.ok) {
        // Reload user to get updated metadata
        await user.reload()
        setTier(newTier)
        return { success: true }
      } else {
        const error = await response.json()
        return { success: false, error: error.message }
      }
    } catch (error) {
      console.error("Failed to upgrade tier:", error)
      return { success: false, error: "Network error" }
    }
  }

  return {
    tier,
    isLoading: isLoading || !isLoaded,
    upgradeTier,
    user,
  }
}
