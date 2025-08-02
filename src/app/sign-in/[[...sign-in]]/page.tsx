import { SignIn } from "@clerk/nextjs"
import Link from "next/link"
import { Sparkles, Shield, Zap, Crown, ArrowLeft, Star, Calendar } from "lucide-react"

export default function SignInPage() {
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
        {/* Left Side - Branding & Welcome Back */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-12 py-24">
          <div className="max-w-lg">
            {/* Logo */}
            <div className="flex items-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-3">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
              </div>
              <span className="ml-4 text-2xl font-bold text-slate-900">Event Showcase</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Welcome back to your events</h1>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Sign in to access your personalized event dashboard and continue exploring amazing experiences tailored to
              your tier.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
                <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
                <div className="text-slate-700 font-medium">Active Members</div>
              </div>
              <div className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-slate-700 font-medium">Monthly Events</div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                What's New
              </h3>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">New Gold tier events added</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Platinum exclusive workshop available</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-slate-700">Member rewards program launched</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-24 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile Header */}
            <div className="lg:hidden text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl blur-lg opacity-30"></div>
                  <div className="relative bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-3">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
              <p className="text-slate-600">Sign in to your account</p>
            </div>

            {/* Sign In Component Container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-200 p-8">
              <SignIn
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-transparent shadow-none border-none p-0",
                    headerTitle: "text-2xl font-bold text-slate-900 hidden lg:block",
                    headerSubtitle: "text-slate-600 hidden lg:block",
                    socialButtonsBlockButton:
                      "bg-white border-2 border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 rounded-xl",
                    socialButtonsBlockButtonText: "text-slate-700 font-medium",
                    formButtonPrimary:
                      "bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
                    formFieldInput:
                      "rounded-xl border-2 border-slate-200 focus:border-emerald-400 focus:ring-emerald-400 transition-all duration-300",
                    formFieldLabel: "text-slate-700 font-medium",
                    footerActionLink: "text-emerald-600 hover:text-emerald-700 font-medium",
                    identityPreviewText: "text-slate-600",
                    formResendCodeLink: "text-emerald-600 hover:text-emerald-700",
                  },
                }}
              />
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-600">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Sign up for free
                </Link>
              </p>
            </div>

            {/* Mobile Features */}
            <div className="lg:hidden mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Shield className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                <div className="text-xs text-slate-600">Secure</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Zap className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-xs text-slate-600">Fast</div>
              </div>
              <div className="text-center p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-slate-200">
                <Crown className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-xs text-slate-600">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Welcome Message */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-200 shadow-lg max-w-md text-center">
          <div className="flex justify-center mb-3">
            <div className="flex text-emerald-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-slate-700 text-sm">
            <strong>Welcome back!</strong> Your events are waiting for you.
          </p>
        </div>
      </div>
    </div>
  )
}
