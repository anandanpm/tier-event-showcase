'use client';

import { TierType } from '@/lib/types';
import { TierBadge } from './TierBadge';
import { Lock, ArrowUp } from 'lucide-react';
import { useUser } from '@clerk/nextjs';
import { useState } from 'react';

interface TierUpgradeCardProps {
  requiredTier: TierType;
  eventTitle: string;
}

const tierUpgrades: Record<TierType, TierType[]> = {
  free: ['silver', 'gold', 'platinum'],
  silver: ['gold', 'platinum'],
  gold: ['platinum'],
  platinum: [],
};

export function TierUpgradeCard({ requiredTier, eventTitle }: TierUpgradeCardProps) {
  const { user } = useUser();
  const [isUpgrading, setIsUpgrading] = useState(false);
  const currentTier = (user?.publicMetadata?.tier as TierType) || 'free';
  
  const availableUpgrades = tierUpgrades[currentTier];

  const handleUpgrade = async (newTier: TierType) => {
    if (!user) return;
    
    setIsUpgrading(true);
    try {
      await user.update({
        publicMetadata: {
          ...user.publicMetadata,
          tier: newTier,
        },
      });
      
      // Refresh the page to update the events list
      window.location.reload();
    } catch (error) {
      console.error('Failed to upgrade tier:', error);
    } finally {
      setIsUpgrading(false);
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
      <div className="flex justify-center mb-4">
        <Lock className="h-12 w-12 text-gray-400" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-700 mb-2">
        Premium Event Locked
      </h3>
      
      <p className="text-gray-600 mb-4">
        Upgrade to <TierBadge tier={requiredTier} className="mx-1" /> to access "{eventTitle}"
      </p>
      
      {availableUpgrades.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-gray-500 mb-3">Available upgrades:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {availableUpgrades.map((tier) => (
              <button
                key={tier}
                onClick={() => handleUpgrade(tier)}
                disabled={isUpgrading}
                className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ArrowUp className="h-3 w-3 mr-1" />
                Upgrade to {tier.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}