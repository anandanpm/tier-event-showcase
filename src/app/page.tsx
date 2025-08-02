import { SignedIn, SignedOut } from "@clerk/nextjs"
import Link from "next/link"
import { ArrowRight, Users, Calendar, Star, Shield, Zap, Crown, Sparkles, Gift, Trophy } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <SignedOut>
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              {/* Logo/Icon */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-4">
                    <Sparkles className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Welcome to
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  Event Showcase
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Discover exclusive events tailored to your membership tier.
                <br />
                <span className="font-semibold text-blue-700">Join our community and unlock premium experiences.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                <Link
                  href="/sign-up"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-4 text-white font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center justify-center">
                    <Sparkles className="mr-3 h-6 w-6" />
                    Get Started Free
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>

                <Link
                  href="/sign-in"
                  className="group bg-white/80 backdrop-blur-sm border-2 border-slate-300 rounded-2xl px-8 py-4 text-slate-700 font-bold text-lg shadow-lg hover:shadow-xl hover:border-blue-400 transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-center">
                    Sign In
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose Event Showcase?</h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Experience the future of event discovery with our tier-based membership system
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-blue-300 transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Tiered Access</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Events perfectly tailored to your membership level, ensuring you get the most relevant experiences
                  </p>
                </div>
              </div>

              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-purple-300 transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Exclusive Events</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Access premium content and exclusive experiences reserved for higher tier members
                  </p>
                </div>
              </div>

              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-slate-200 hover:border-amber-300 transform hover:scale-105 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative text-center">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Upgrade Anytime</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Seamlessly upgrade your membership to unlock more events and premium features as you grow
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-3 w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Secure Platform</h4>
                <p className="text-sm text-slate-600">Enterprise-grade security for all your data</p>
              </div>

              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-3 w-fit mx-auto mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Lightning Fast</h4>
                <p className="text-sm text-slate-600">Optimized performance for seamless browsing</p>
              </div>

              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg p-3 w-fit mx-auto mb-4">
                  <Gift className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Special Perks</h4>
                <p className="text-sm text-slate-600">Exclusive rewards and member benefits</p>
              </div>

              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg p-3 w-fit mx-auto mb-4">
                  <Trophy className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-slate-900 mb-2">Premium Quality</h4>
                <p className="text-sm text-slate-600">Curated events of the highest standard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tier Showcase */}
        <div className="relative py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Tier</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Start free and upgrade as you discover more amazing events
            </p>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { name: "Free", color: "from-slate-400 to-slate-600", icon: Sparkles },
                { name: "Silver", color: "from-slate-300 to-slate-500", icon: Shield },
                { name: "Gold", color: "from-yellow-400 to-yellow-600", icon: Crown },
                { name: "Platinum", color: "from-purple-400 to-purple-600", icon: Trophy },
              ].map((tier, index) => {
                const Icon = tier.icon
                return (
                  <div
                    key={tier.name}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className={`bg-gradient-to-r ${tier.color} rounded-xl p-4 w-fit mx-auto mb-4`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-blue-100 text-sm">
                      {index === 0 && "Perfect for getting started"}
                      {index === 1 && "Great for regular attendees"}
                      {index === 2 && "Ideal for event enthusiasts"}
                      {index === 3 && "Ultimate premium experience"}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="relative min-h-screen flex items-center justify-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            ></div>
          </div>

          <div className="relative text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Welcome Animation */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full p-6">
                  <Calendar className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Welcome Back!
              </span>
            </h1>

            <p className="text-2xl text-slate-600 mb-12 leading-relaxed">
              Ready to explore your exclusive events?
              <br />
              <span className="font-semibold text-blue-700">Your personalized dashboard awaits!</span>
            </p>

            {/* Enhanced CTA */}
            <div className="space-y-6">
              <Link
                href="/events"
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-2xl px-12 py-6 text-white font-bold text-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 inline-flex items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 via-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center">
                  <Calendar className="mr-4 h-8 w-8" />
                  View My Events
                  <ArrowRight className="ml-4 h-8 w-8 group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">∞</div>
                  <div className="text-slate-700 font-medium">Events Available</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-slate-700 font-medium">Access</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Premium</div>
                  <div className="text-slate-700 font-medium">Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedIn>
    </div>
  )
}
