import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { ArrowRight, Users, Calendar, Star } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <SignedOut>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to Event Showcase
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Discover exclusive events tailored to your membership tier. 
            Join our community and unlock premium experiences.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tiered Access</h3>
              <p className="text-gray-600">Events tailored to your membership level</p>
            </div>
            <div className="text-center p-6">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Exclusive Events</h3>
              <p className="text-gray-600">Premium content for higher tiers</p>
            </div>
            <div className="text-center p-6">
              <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upgrade Anytime</h3>
              <p className="text-gray-600">Unlock more events as you grow</p>
            </div>
          </div>
          
          <div className="space-x-4">
            <Link
              href="/sign-up"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/sign-in"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Sign In
            </Link>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome Back!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Ready to explore your exclusive events?
          </p>
          <Link
            href="/events"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            View My Events
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </SignedIn>
    </div>
  );
}