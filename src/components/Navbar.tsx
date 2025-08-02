"use client"

import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { TierBadge } from "./TierBadge"
import { Sparkles } from "lucide-react"
import { useUserTier } from "@/hooks/use-user-tier"

export function NavBar() {
  const { tier, user, isLoading } = useUserTier()

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors"
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-2">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span>Event Showcase</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user && (
              <>
                {isLoading ? (
                  <div className="animate-pulse bg-slate-200 rounded-full h-6 w-16"></div>
                ) : (
                  <TierBadge tier={tier} />
                )}
                <div className="hidden sm:block">
                  <span className="text-sm text-slate-600 font-medium">
                    {user.firstName} {user.lastName}
                  </span>
                </div>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 ring-2 ring-blue-500/20 hover:ring-blue-500/40 transition-all",
                    },
                  }}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
