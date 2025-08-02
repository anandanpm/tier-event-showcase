"use server"

import { auth } from "@clerk/nextjs/server"
import { updateUserTier, getUserTier } from "@/lib/clerk-utils"
import { type NextRequest, NextResponse } from "next/server"
import type { TierType } from "@/lib/types"

// GET - Get user's current tier
export async function GET() {
  try {
    const { userId } = await auth()
    console.log("User ID from auth:", userId)

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const tier = await getUserTier(userId)
    return NextResponse.json({ tier })
  } catch (error) {
    console.error("Error getting user tier:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

// POST - Update user's tier
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth()

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { tier } = await request.json()

    if (!tier || !["free", "silver", "gold", "platinum"].includes(tier)) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 })
    }

    const result = await updateUserTier(userId, tier as TierType)

    if (result.success) {
      return NextResponse.json({ success: true, tier })
    } else {
      return NextResponse.json({ error: "Failed to update tier" }, { status: 500 })
    }
  } catch (error) {
    console.error("Error updating user tier:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
