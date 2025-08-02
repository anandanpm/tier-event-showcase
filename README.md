# 🚀 Tier-Based Event Showcase

A responsive web application that displays events based on user tiers, built with Next.js 14, Tailwind CSS, Clerk authentication, and Supabase database.

## 📋 Overview

This application allows authenticated users to view events based on their subscription tier (Free, Silver, Gold, Platinum). Users can only see events available to their tier or lower tiers, creating an exclusive content experience.

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Authentication**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## ✨ Features

- 🔐 **Secure Authentication** - Login/signup with Clerk.dev
- 🎫 **Tier-Based Access** - Events filtered by user subscription tier
- 📱 **Responsive Design** - Mobile-first, clean UI with Tailwind CSS
- 🏷️ **Color-Coded Badges** - Visual tier identification
- ⚡ **Loading States** - Smooth user experience with proper loading indicators
- 🚫 **Access Control** - Clear messaging for restricted content
- 🔄 **Tier Upgrade Simulation** - Test different tier experiences

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account
- Clerk.dev account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/anandanpm/tier-event-showcase
   cd tier-event-showcase
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   
   Create a `.env.example` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/events
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/events

Create a `.env.local` file in the root directory:
    Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. **Database Setup**
   
   Run the following SQL in your Supabase SQL editor:
   ```sql
   -- Create events table
   CREATE TABLE events (
     id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
     title TEXT NOT NULL,
     description TEXT NOT NULL,
     event_date TIMESTAMP WITH TIME ZONE NOT NULL,
     image_url TEXT,
     tier TEXT CHECK (tier IN ('free', 'silver', 'gold', 'platinum')) NOT NULL,
     created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Insert sample events
   INSERT INTO events (title, description, event_date, image_url, tier) VALUES
   ('Welcome Webinar', 'Introduction to our platform and basic features', '2025-08-15 14:00:00+00', '/images/webinar.jpg', 'free'),
   ('Community Meetup', 'Monthly community gathering and networking', '2025-08-20 18:00:00+00', '/images/meetup.jpg', 'free'),
   ('Advanced Workshop', 'Deep dive into advanced platform features', '2025-08-25 15:00:00+00', '/images/workshop.jpg', 'silver'),
   ('Silver Exclusive Event', 'Special event for Silver tier members', '2025-09-01 16:00:00+00', '/images/silver-event.jpg', 'silver'),
   ('Gold Member Summit', 'Exclusive summit for Gold tier members', '2025-09-10 10:00:00+00', '/images/gold-summit.jpg', 'gold'),
   ('VIP Gold Experience', 'Premium experience for Gold members', '2025-09-15 19:00:00+00', '/images/gold-vip.jpg', 'gold'),
   ('Platinum Gala', 'Exclusive gala dinner for Platinum members', '2025-09-20 19:30:00+00', '/images/platinum-gala.jpg', 'platinum'),
   ('Elite Platinum Retreat', 'Weekend retreat for Platinum tier', '2025-09-25 09:00:00+00', '/images/platinum-retreat.jpg', 'platinum');
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

> **Note**: These are demo accounts. In production, users would sign up normally and have their tier set through your subscription system.

## 🔒 Tier System

The application implements a hierarchical tier system:

- **Free** (Level 0): Access to free events only
- **Silver** (Level 1): Access to free + silver events
- **Gold** (Level 2): Access to free + silver + gold events  
- **Platinum** (Level 3): Access to all events

## 🚀 Deployment

### Deploy to Vercel

1. **Connect your GitHub repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your app

### Live Demo

🌐 **Live Application**: [https://tier-event-showcase-xv27.vercel.app/](https://tier-event-showcase-xv27.vercel.app/)

## 📱 Features Walkthrough

### Authentication Flow
1. Users sign up/login through Clerk
2. Tier information is stored in Clerk user metadata
3. Protected routes ensure only authenticated users access events

### Event Display
1. Events are fetched from Supabase based on user tier
2. Grid layout with responsive cards
3. Color-coded tier badges for easy identification
4. Upgrade prompts for restricted content

### Tier Management
1. Simulate tier upgrades with the upgrade button
2. Real-time event list updates based on new tier
3. Clear visual feedback for tier changes

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.dev/) for seamless authentication
- [Supabase](https://supabase.com/) for the powerful backend
- [Tailwind CSS](https://tailwindcss.com/) for beautiful styling



**Built with ❤️ by [ANANDA KRISHNAN] for Psypher AI**