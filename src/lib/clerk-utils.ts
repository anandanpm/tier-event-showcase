import { createClerkClient } from "@clerk/nextjs/server"
import type { TierType } from "./types"

// Create a Clerk client instance
const clerk = createClerkClient({
  secretKey: process.env.CLERK_SECRET_KEY,
})

// Server-side function to update user tier
export async function updateUserTier(userId: string, tier: TierType) {
  try {
    await clerk.users.updateUser(userId, {
      publicMetadata: {
        tier: tier,
      },
    })
    return { success: true }
  } catch (error) {
    console.error("Failed to update user tier:", error)
    return { success: false, error }
  }
}

// Server-side function to get user tier
export async function getUserTier(userId: string): Promise<TierType> {
  try {
    const user = await clerk.users.getUser(userId)
    return (user.publicMetadata?.tier as TierType) || "free"
  } catch (error) {
    console.error("Failed to get user tier:", error)
    return "free"
  }
}

// Initialize user with default tier if none exists
export async function initializeUserTier(userId: string) {
  try {
    const user = await clerk.users.getUser(userId)
    if (!user.publicMetadata?.tier) {
      await updateUserTier(userId, "free")
    }
  } catch (error) {
    console.error("Failed to initialize user tier:", error)
  }
}
