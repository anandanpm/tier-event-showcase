import Image from "next/image"
import type { Event } from "@/lib/types"
import { TierBadge } from "./TierBadge"
import { formatDate } from "@/lib/utils"
import { Calendar } from "lucide-react"

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-slate-200">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image_url || "https://via.placeholder.com/400x300?text=Event+Image"}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-4 right-4">
          <TierBadge tier={event.tier} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
          {event.title}
        </h3>

        <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">{event.description}</p>

        <div className="flex items-center text-sm text-slate-500 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(event.event_date)}</span>
          </div>
        </div>

        {/* Hover effect line */}
        <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </div>
  )
}
