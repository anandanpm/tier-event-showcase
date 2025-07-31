import Image from 'next/image';
import { Event } from '@/lib/types';
import { TierBadge } from './TierBadge';
import { formatDate } from '@/lib/utils';
import { Calendar, Clock } from 'lucide-react';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={event.image_url || 'https://via.placeholder.com/400x300?text=Event+Image'}
          alt={event.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 right-3">
          <TierBadge tier={event.tier} />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {event.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {event.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {formatDate(event.event_date)}
          </div>
        </div>
      </div>
    </div>
  );
}