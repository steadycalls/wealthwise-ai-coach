import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "wouter";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import { useState } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "Hello! I'm your WealthWise AI Coach. I'm here to help you with budgeting, saving, investing, and debt management. What financial questions do you have today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "How can I reduce my monthly expenses?",
    "What's the best way to pay off my credit card debt?",
    "Should I invest in stocks or save for emergencies first?",
    "How much should I save for retirement?"
  ];

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response (in production, this would call your AI API)
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getAIResponse(input),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const getAIResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("expense") || lowerQuestion.includes("reduce") || lowerQuestion.includes("spending")) {
      return "Great question! Here are some strategies to reduce your monthly expenses:\n\n1. **Track Everything**: Use the dashboard to see where your money goes. You're currently spending $3,200/month.\n\n2. **The 50/30/20 Rule**: Allocate 50% to needs, 30% to wants, 20% to savings. Right now, your wants category is at 35%.\n\n3. **Cut Subscriptions**: Review recurring charges. Most people have 3-5 subscriptions they don't use.\n\n4. **Meal Planning**: Food spending is often 20-30% higher than necessary. Try planning meals weekly.\n\nWould you like me to create a personalized budget optimization plan based on your spending patterns?";
    }
    
    if (lowerQuestion.includes("debt") || lowerQuestion.includes("credit card") || lowerQuestion.includes("pay off")) {
      return "Let's tackle that debt! Based on your dashboard, you have:\n\n• **Credit Card**: $2,400 at ~22% APR\n• **Student Loan**: $15,000 at ~6% APR\n\n**Recommended Strategy** (Avalanche Method):\n1. Pay minimums on all debts\n2. Put extra money toward the credit card (highest interest)\n3. Once that's paid off, attack the student loan\n\n**Quick Win**: If you can pay an extra $150/month on the credit card, you'll:\n• Save ~$1,200 in interest\n• Be debt-free 18 months sooner\n• Free up $275/month for savings\n\nWant me to create a detailed payoff timeline?";
    }
    
    if (lowerQuestion.includes("invest") || lowerQuestion.includes("stock") || lowerQuestion.includes("emergency")) {
      return "Excellent question about priorities! Here's the recommended order:\n\n**1. Emergency Fund First** (3-6 months expenses)\n• You need ~$13,500-$27,000\n• Currently at $6,500 - you're halfway there!\n• Keep this in a high-yield savings account (4-5% APY)\n\n**2. Pay Off High-Interest Debt**\n• Your credit card at 22% APR is costing you money\n• This is guaranteed 22% \"return\" by paying it off\n\n**3. Then Start Investing**\n• Max out employer 401(k) match (free money!)\n• Consider Roth IRA for tax-free growth\n• Start with index funds for diversification\n\n**Your Next Step**: Focus on building that emergency fund to $10,000, while making extra payments on the credit card. Once you hit these goals, we'll create an investment strategy.\n\nSound good?";
    }
    
    if (lowerQuestion.includes("retirement") || lowerQuestion.includes("save")) {
      return "Planning for retirement is smart! Here's a personalized estimate:\n\n**General Rule**: Save 15-20% of gross income for retirement.\n\nBased on your current spending (~$3,200/month = $38,400/year), you'll likely need:\n• **Annual retirement income**: $30,000-$35,000 (80% of current)\n• **Total needed**: $750,000-$900,000 (assuming 4% withdrawal rate)\n\n**How to get there**:\n• Start with employer 401(k) match (if available)\n• Contribute at least $500/month ($6,000/year)\n• With 7% average returns over 30 years, you'd have ~$600,000\n\n**Your Action Items**:\n1. Increase 401(k) contribution to 10-15% of salary\n2. Open a Roth IRA if eligible\n3. Automate contributions so you don't miss them\n\nWant me to calculate exactly how much you need based on your age and income?";
    }
    
    return "That's a great question! Based on your financial profile, I can help you with:\n\n• **Budget optimization** - You're spending $3,200/month with room for improvement\n• **Debt payoff strategies** - $17,400 total debt across 2 accounts\n• **Savings goals** - You're 65% toward your $10,000 goal\n• **Investment guidance** - Once emergency fund is complete\n\nCould you tell me more specifically what you'd like help with? Or try one of the suggested questions below!";
  };

  const handleSuggestedQuestion = (question: string) => {
    setInput(question);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-purple-600" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AI Financial Coach
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 container py-6 flex flex-col max-w-4xl">
        <Card className="flex-1 flex flex-col border-none shadow-lg overflow-hidden">
          {/* Messages */}
          <ScrollArea className="flex-1 p-6">
            <div className="space-y-6">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                        : "bg-gray-100 text-gray-900"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        <span className="text-xs font-semibold text-purple-600">AI Coach</span>
                      </div>
                    )}
                    <div className="whitespace-pre-line text-sm leading-relaxed">
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-gray-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                      <span className="text-xs font-semibold text-purple-600">AI Coach</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="px-6 py-4 border-t bg-gray-50">
              <p className="text-sm font-medium text-gray-600 mb-3">Suggested questions:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="justify-start text-left h-auto py-2 px-3 hover:bg-blue-50 hover:border-blue-300"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    <span className="text-xs line-clamp-2">{question}</span>
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Ask me anything about your finances..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isTyping}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              💡 Tip: Ask specific questions about budgeting, debt, savings, or investments for personalized advice
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}

