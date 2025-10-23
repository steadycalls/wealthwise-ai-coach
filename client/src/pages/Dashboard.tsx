import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Link } from "wouter";
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, Target, CreditCard, PiggyBank, MessageSquare } from "lucide-react";

export default function Dashboard() {
  // Mock data for demonstration
  const financialHealth = 72;
  const monthlyBudget = 4500;
  const spent = 3200;
  const savingsGoal = 10000;
  const currentSavings = 6500;
  const debts = [
    { name: "Credit Card", balance: 2400, minPayment: 75 },
    { name: "Student Loan", balance: 15000, minPayment: 200 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                WealthWise AI
              </h1>
            </div>
            <Link href="/chat">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <MessageSquare className="h-4 w-4 mr-2" />
                Ask AI Coach
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        {/* Financial Health Score */}
        <Card className="mb-8 border-none shadow-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white">
          <CardHeader>
            <CardTitle className="text-2xl">Financial Health Score</CardTitle>
            <CardDescription className="text-blue-100">
              Your overall financial wellness rating
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-6">
              <div className="text-6xl font-bold">{financialHealth}</div>
              <div className="flex-1">
                <Progress value={financialHealth} className="h-4 bg-white/20" />
                <p className="text-sm mt-2 text-blue-100">
                  {financialHealth >= 70 ? "Great job! Keep it up!" : "You're making progress!"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Monthly Budget</CardTitle>
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${spent.toLocaleString()}</div>
              <p className="text-xs text-gray-500">of ${monthlyBudget.toLocaleString()}</p>
              <Progress value={(spent / monthlyBudget) * 100} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Savings Goal</CardTitle>
                <Target className="h-5 w-5 text-green-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${currentSavings.toLocaleString()}</div>
              <p className="text-xs text-gray-500">of ${savingsGoal.toLocaleString()}</p>
              <Progress value={(currentSavings / savingsGoal) * 100} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">Total Debt</CardTitle>
                <CreditCard className="h-5 w-5 text-orange-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${debts.reduce((sum, d) => sum + d.balance, 0).toLocaleString()}
              </div>
              <p className="text-xs text-gray-500">{debts.length} active accounts</p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">This Month</CardTitle>
                <PiggyBank className="h-5 w-5 text-purple-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">+$450</div>
              <p className="text-xs text-gray-500">vs last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Sections */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Spending Breakdown */}
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Top Spending Categories</CardTitle>
              <CardDescription>Where your money went this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { category: "Housing", amount: 1200, percent: 38, trend: "up" },
                { category: "Food & Dining", amount: 650, percent: 20, trend: "down" },
                { category: "Transportation", amount: 400, percent: 13, trend: "up" },
                { category: "Entertainment", amount: 300, percent: 9, trend: "down" },
                { category: "Shopping", amount: 450, percent: 14, trend: "up" }
              ].map((item) => (
                <div key={item.category} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.category}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">${item.amount}</span>
                      {item.trend === "up" ? (
                        <TrendingUp className="h-4 w-4 text-red-500" />
                      ) : (
                        <TrendingDown className="h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </div>
                  <Progress value={item.percent} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Debt Payoff Plan */}
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle>Debt Payoff Plan</CardTitle>
              <CardDescription>Your path to becoming debt-free</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {debts.map((debt) => (
                <div key={debt.name} className="p-4 bg-gray-50 rounded-lg space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{debt.name}</span>
                    <span className="text-lg font-bold">${debt.balance.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Min. Payment: ${debt.minPayment}</span>
                    <span>~{Math.ceil(debt.balance / (debt.minPayment * 1.5))} months</span>
                  </div>
                  <Progress value={30} className="h-2" />
                </div>
              ))}
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get AI Optimization Plan
              </Button>
            </CardContent>
          </Card>

          {/* AI Insights */}
          <Card className="border-none shadow-md lg:col-span-2">
            <CardHeader>
              <CardTitle>AI Insights & Recommendations</CardTitle>
              <CardDescription>Personalized advice based on your financial data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-50 border-l-4 border-blue-600 rounded">
                <h4 className="font-semibold text-blue-900 mb-1">💡 Budget Optimization</h4>
                <p className="text-sm text-blue-800">
                  You're spending 14% more on shopping this month. Consider setting a $350 limit and using the savings toward your emergency fund.
                </p>
              </div>
              <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
                <h4 className="font-semibold text-green-900 mb-1">🎯 Savings Opportunity</h4>
                <p className="text-sm text-green-800">
                  Great news! You're on track to reach your $10,000 savings goal in 6 months. Consider increasing contributions by $100/month to hit it 2 months earlier.
                </p>
              </div>
              <div className="p-4 bg-orange-50 border-l-4 border-orange-600 rounded">
                <h4 className="font-semibold text-orange-900 mb-1">⚡ Debt Strategy</h4>
                <p className="text-sm text-orange-800">
                  Using the avalanche method, pay an extra $150 toward your credit card (22% APR) instead of minimum payments. You'll save $1,200 in interest over the next year.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

