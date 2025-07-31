'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { TierBadge } from './TierBadge';

export function NavBar() {
  const { user } = useUser();
  const userTier = (user?.publicMetadata?.tier as string) || 'free';

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Event Showcase
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <TierBadge tier={userTier as any} />
                <span className="text-sm text-gray-600">
                  {user.firstName} {user.lastName}
                </span>
                <UserButton afterSignOutUrl="/" />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}