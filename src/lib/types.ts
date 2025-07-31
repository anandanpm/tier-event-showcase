export type TierType = 'free' | 'silver' | 'gold' | 'platinum';

export interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  image_url: string | null;
  tier: TierType;
  created_at?: string;
  updated_at?: string;
}

export interface User {
  id: string;
  tier: TierType;
  firstName?: string;
  lastName?: string;
  emailAddress?: string;
}