import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";

import { Link } from "wouter";
import { Sparkles, TrendingUp, MessageSquare, Target, Shield, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-purple-200 shadow-sm">
            <Sparkles className="h-4 w-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-900">AI-Powered Financial Coaching</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Your Personal
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Financial Coach
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Get professional-grade financial guidance powered by AI. Budget smarter, save faster, and achieve your financial goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/dashboard">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                Get Started Free
              </Button>
            </Link>
            <Link href="/chat">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-white">
                <MessageSquare className="h-5 w-5 mr-2" />
                Try AI Coach
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600 pt-4">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-600" />
              <span>Real-time insights</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything you need to
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                master your money
              </span>
            </h2>
            <p className="text-xl text-gray-600">Powerful tools designed for your financial success</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Smart Budgeting</h3>
              <p className="text-gray-600 leading-relaxed">
                AI analyzes your spending patterns and suggests optimizations. Track every dollar with intelligent categorization and real-time alerts.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                <MessageSquare className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">24/7 AI Coach</h3>
              <p className="text-gray-600 leading-relaxed">
                Ask questions anytime and get personalized advice on budgeting, debt payoff, investing, and more. Like having a financial advisor in your pocket.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Goal Tracking</h3>
              <p className="text-gray-600 leading-relaxed">
                Set savings goals, track progress, and get AI-powered recommendations to reach them faster. Visualize your path to financial freedom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join thousands achieving financial success</h2>
              <p className="text-blue-100 text-lg">Real results from real people</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">$2.4M</div>
                <div className="text-blue-100">Total debt paid off</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$850K</div>
                <div className="text-blue-100">Saved by users</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">15K+</div>
                <div className="text-blue-100">Active users</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to take control of
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              your financial future?
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Start free today. No credit card required.
          </p>
          <Link href="/dashboard">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-8 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p className="text-sm">
            © 2025 WealthWise AI. Your path to financial wellness.
          </p>
        </div>
      </footer>
    </div>
  );
}
