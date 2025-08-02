import { SignUp } from "@clerk/nextjs"
import Link from "next/link"
import { Sparkles, Shield, Zap, Crown, ArrowLeft, Star, Users, Calendar } from "lucide-react"

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Back Button */}
      <div className="absolute top-6 left-6 z-10">
        <Link
          href="/"
          className="group flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-300"
        >
          <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="relative flex min-h-screen">
        {/* Left Side - Branding & Features */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 py-24">
          <div className="max-w-lg">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-3">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
              <span className="ml-4 text-2xl font-bold text-slate-900">Event Showcase</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Join thousands of event enthusiasts</h1>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Start your journey with our tier-based event platform. Discover exclusive events and unlock premium
              experiences as you grow.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg p-2 mr-4">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Secure & Private</h3>
                  <p className="text-slate-600 text-sm">Your data is protected with enterprise-grade security</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-2 mr-4">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Instant Access</h3>
                  <p className="text-slate-600 text-sm">Start exploring events immediately after signup</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg p-2 mr-4">
                  <Crown className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Premium Benefits</h3>
                  <p className="text-slate-600 text-sm">Upgrade anytime to unlock exclusive events</p>
                </div>
              </div>
            </div>

            {/* Tier Preview */}
            <div className="mt-12 p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Start with Free Tier</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">5+</div>
                  <div className="text-sm text-slate-600">Free Events</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">∞</div>
                  <div className="text-sm text-slate-600">Upgrade Options</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign Up Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-24 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-30"></div>
                  <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-3">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h1>
              <p className="text-slate-600">Join Event Showcase today</p>
            </div>

            {/* Sign Up Component Container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200 p-8">
              <SignUp
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-transparent shadow-none border-none p-0",
                    headerTitle: "text-2xl font-bold text-slate-900 hidden lg:block",
                    headerSubtitle: "text-slate-600 hidden lg:block",
                    socialButtonsBlockButton:
                      "bg-white border-2 border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 rounded-xl",
                    socialButtonsBlockButtonText: "text-slate-700 font-medium",
                    formButtonPrimary:
                      "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
                    formFieldInput:
                      "rounded-xl border-2 border-slate-200 focus:border-blue-400 focus:ring-blue-400 transition-all duration-300",
                    formFieldLabel: "text-slate-700 font-medium",
                    footerActionLink: "text-blue-600 hover:text-blue-700 font-medium",
                    identityPreviewText: "text-slate-600",
                    formResendCodeLink: "text-blue-600 hover:text-blue-700",
                  },
                }}
              />
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600">
                By signing up, you agree to our{" "}
                <Link href="/terms" className="text-blue-600 hover:text-blue-700 font-medium">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium">
                  Privacy Policy
                </Link>
              </p>
            </div>

            {/* Mobile Features */}
            <div className="lg:hidden mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-xs text-slate-600">Community</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-xs text-slate-600">Events</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Star className="h-6 w-6 text-amber-600 mx-auto mb-2" />
                <div className="text-xs text-slate-600">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Testimonial */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg max-w-md">
          <div className="flex items-center mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-sm text-slate-600">5.0 rating</span>
          </div>
          <p className="text-slate-700 text-sm italic">
            "Event Showcase transformed how I discover and attend events. The tier system is brilliant!"
          </p>
          <div className="mt-3 text-xs text-slate-500">- Sarah M., Gold Member</div>
        </div>
      </div>
    </div>
  )
}
