'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { Event, TierType } from '@/lib/types';
import { EventCard } from '@/components/EventCard';
import { TierUpgradeCard } from '@/components/TierUpgradeCard';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { canAccessEvent } from '@/lib/utils';

export default function EventsPage() {
  const { user, isLoaded } = useUser();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get tier from either metadata source with fallback
  const userTier = (
    user?.publicMetadata?.tier as TierType ||
    user?.unsafeMetadata?.tier as TierType ||
    'free'
  );

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError('Failed to load events. Please try again.');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    }

    if (isLoaded) {
      fetchEvents();
    }
  }, [isLoaded]);

  // Initialize user with default tier if none exists
  useEffect(() => {
    if (user && !user.publicMetadata?.tier && !user.unsafeMetadata?.tier) {
      user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          tier: 'free'
        }
      }).catch(console.error);
    }
  }, [user]);

  if (!isLoaded || loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="text-red-600 mb-4">Error loading events</div>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  const accessibleEvents = events.filter(event => canAccessEvent(userTier, event.tier));
  const inaccessibleEvents = events.filter(event => !canAccessEvent(userTier, event.tier));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Events</h1>
        <p className="text-gray-600">
          Showing events available for your {userTier.toUpperCase()} tier membership
        </p>
        
        {/* Debug info - remove this in production */}
        <div className="text-xs text-gray-500 mt-2">
          Debug: User ID: {user?.id}, Tier: {userTier}, 
          Public: {user?.publicMetadata?.tier as string || 'none'}, 
          Unsafe: {user?.unsafeMetadata?.tier as string || 'none'}
        </div>
      </div>

      {accessibleEvents.length === 0 && inaccessibleEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No events available at the moment.</p>
        </div>
      ) : (
        <>
          {/* Accessible Events */}
          {accessibleEvents.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Available Events ({accessibleEvents.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {accessibleEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

          {/* Upgrade Prompts for Inaccessible Events */}
          {inaccessibleEvents.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Premium Events ({inaccessibleEvents.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {inaccessibleEvents.map((event) => (
                  <TierUpgradeCard
                    key={event.id}
                    requiredTier={event.tier}
                    eventTitle={event.title}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}