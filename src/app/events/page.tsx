"use client"

import { useEffect, useState } from "react"
import { useUser } from "@clerk/nextjs"
import type { Event, TierType } from "@/lib/types"
import { EventCard } from "@/components/EventCard"
import { TierUpgradeCard } from "@/components/TierUpgradeCard"
import { LoadingSpinner } from "@/components/LoadingSpinner"
import { canAccessEvent } from "@/lib/utils"
import { TierBadge } from "@/components/TierBadge"
import { Calendar, Lock, Sparkles, AlertCircle, RefreshCw } from "lucide-react"

export default function EventsPage() {
  const { user, isLoaded } = useUser()
  const [events, setEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Get tier from either metadata source with fallback
  const userTier = (user?.publicMetadata?.tier as TierType) || (user?.unsafeMetadata?.tier as TierType) || "free"

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch("/api/events")
        if (!response.ok) {
          throw new Error("Failed to fetch events")
        }
        const data = await response.json()
        setEvents(data)
      } catch (err) {
        setError("Failed to load events. Please try again.")
        console.error("Error fetching events:", err)
      } finally {
        setLoading(false)
      }
    }

    if (isLoaded) {
      fetchEvents()
    }
  }, [isLoaded])

  // Initialize user with default tier if none exists
  useEffect(() => {
    if (user && !user.publicMetadata?.tier && !user.unsafeMetadata?.tier) {
      user
        .update({
          unsafeMetadata: {
            ...user.unsafeMetadata,
            tier: "free",
          },
        })
        .catch(console.error)
    }
  }, [user])

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12 border border-red-100">
              <div className="flex justify-center mb-6">
                <div className="bg-red-100 rounded-full p-4">
                  <AlertCircle className="h-12 w-12 text-red-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-red-800 mb-4">Oops! Something went wrong</h2>
              <p className="text-red-600 mb-8 text-lg">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const accessibleEvents = events.filter((event) => canAccessEvent(userTier, event.tier))
  const inaccessibleEvents = events.filter((event) => !canAccessEvent(userTier, event.tier))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30"></div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30">
                <Calendar className="h-12 w-12 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Your Event Dashboard</h1>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Discover amazing events tailored to your <TierBadge tier={userTier} className="mx-1" /> membership level
            </p>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{accessibleEvents.length}</div>
                <div className="text-blue-100 font-medium">Available Events</div>
              </div>
               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{inaccessibleEvents.length}</div>
                <div className="text-blue-100 font-medium">Premium Events</div>
              </div> 
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">{events.length}</div>
                <div className="text-blue-100 font-medium">Total Events</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {accessibleEvents.length === 0 && inaccessibleEvents.length === 0 ? (
          <div className="text-center py-24">
            <div className="bg-white rounded-2xl shadow-xl p-12 max-w-2xl mx-auto border border-slate-200">
              <div className="flex justify-center mb-6">
                <div className="bg-slate-100 rounded-full p-6">
                  <Calendar className="h-16 w-16 text-slate-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">No Events Available</h3>
              <p className="text-slate-600 text-lg mb-8">Check back soon for exciting new events!</p>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <RefreshCw className="h-5 w-5 mr-2" />
                Refresh Page
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {/* Available Events Section */}
            {accessibleEvents.length > 0 && (
              <section>
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-3 mr-4">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">Available Events</h2>
                    <p className="text-slate-600 mt-1">
                      {accessibleEvents.length} event{accessibleEvents.length !== 1 ? "s" : ""} you can access right now
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {accessibleEvents.map((event, index) => (
                    <div key={event.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <EventCard event={event} />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Premium Events Section */}
            {inaccessibleEvents.length > 0 && (
              <section>
                <div className="flex items-center mb-8">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl p-3 mr-4">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">Premium Events</h2>
                    <p className="text-slate-600 mt-1">
                      {inaccessibleEvents.length} exclusive event{inaccessibleEvents.length !== 1 ? "s" : ""} waiting
                      for you
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {inaccessibleEvents.map((event, index) => (
                    <div
                      key={event.id}
                      className="animate-fade-in-up"
                      style={{ animationDelay: `${(accessibleEvents.length + index) * 100}ms` }}
                    >
                      <TierUpgradeCard requiredTier={event.tier} eventTitle={event.title} />
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
