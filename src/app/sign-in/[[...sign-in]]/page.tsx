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
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
        <Link
          href="/"
          className="group flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200 text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
        >
          <ArrowLeft className="h-4 w-4 mr-1 sm:mr-2 group-hover:-translate-x-1 transition-transform" />
          <span className="hidden sm:inline">Back to Home</span>
          <span className="sm:hidden">Back</span>
        </Link>
      </div>

      <div className="relative flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Branding & Welcome Back */}
        <div className="lg:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
          <div className="max-w-lg mx-auto lg:mx-0">
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start mb-6 sm:mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl sm:rounded-2xl blur-lg opacity-30"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl sm:rounded-2xl p-2 sm:p-3">
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
              </div>
              <span className="ml-3 sm:ml-4 text-xl sm:text-2xl font-bold text-slate-900">Event Showcase</span>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 sm:mb-6 text-center lg:text-left">
              Welcome back to your events
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 mb-8 sm:mb-12 leading-relaxed text-center lg:text-left">
              Sign in to access your personalized event dashboard and continue exploring amazing experiences tailored to
              your tier.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-200">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600 mb-1 sm:mb-2">1000+</div>
                <div className="text-slate-700 font-medium text-xs sm:text-sm lg:text-base">Active Members</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-slate-200">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">50+</div>
                <div className="text-slate-700 font-medium text-xs sm:text-sm lg:text-base">Monthly Events</div>
              </div>
            </div>

            {/* Recent Activity - Hidden on mobile */}
            <div className="hidden md:block p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl border border-blue-200">
              <h3 className="font-bold text-slate-900 mb-3 sm:mb-4 flex items-center text-sm sm:text-base">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-blue-600" />
                What's New
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">New Gold tier events added</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Platinum exclusive workshop available</span>
                </div>
                <div className="flex items-center text-xs sm:text-sm">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-slate-700">Member rewards program launched</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Sign In Form */}
        <div className="lg:w-1/2 flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8 lg:py-24">
          <div className="w-full max-w-sm sm:max-w-md">
            {/* Mobile Header - Only shown on mobile */}
            <div className="md:hidden text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
              <p className="text-slate-600 text-sm sm:text-base">Sign in to your account</p>
            </div>

            {/* Sign In Component Container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-slate-200 p-4 sm:p-6 lg:p-8">
              <SignIn
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    card: "bg-transparent shadow-none border-none p-0",
                    headerTitle: "text-xl sm:text-2xl font-bold text-slate-900 hidden md:block",
                    headerSubtitle: "text-slate-600 hidden md:block text-sm sm:text-base",
                    socialButtonsBlockButton:
                      "bg-white border-2 border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 rounded-lg sm:rounded-xl text-sm sm:text-base py-2 sm:py-3",
                    socialButtonsBlockButtonText: "text-slate-700 font-medium text-sm sm:text-base",
                    formButtonPrimary:
                      "bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base py-2 sm:py-3",
                    formFieldInput:
                      "rounded-lg sm:rounded-xl border-2 border-slate-200 focus:border-emerald-400 focus:ring-emerald-400 transition-all duration-300 text-sm sm:text-base py-2 sm:py-3",
                    formFieldLabel: "text-slate-700 font-medium text-sm sm:text-base",
                    footerActionLink: "text-emerald-600 hover:text-emerald-700 font-medium text-sm sm:text-base",
                    identityPreviewText: "text-slate-600 text-sm sm:text-base",
                    formResendCodeLink: "text-emerald-600 hover:text-emerald-700 text-sm sm:text-base",
                    formFieldInputShowPasswordButton: "text-slate-500 hover:text-slate-700",
                  },
                }}
              />
            </div>

            {/* Additional Info */}
            <div className="mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-slate-600">
                Don't have an account?{" "}
                <Link href="/sign-up" className="text-emerald-600 hover:text-emerald-700 font-medium">
                  Sign up for free
                </Link>
              </p>
            </div>

            {/* Mobile Features - Only shown on mobile */}
            <div className="md:hidden mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs text-slate-600">Secure</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200">
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs text-slate-600">Fast</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg sm:rounded-xl border border-slate-200">
                <Crown className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 mx-auto mb-1 sm:mb-2" />
                <div className="text-xs text-slate-600">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Welcome Message - Hidden on mobile and tablet */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden xl:block">
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
