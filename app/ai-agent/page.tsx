"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Zap, Lock, Plus, CheckCircle2, Send, Mic, X } from "lucide-react"
import { useState } from "react"

export default function AIAgentPage() {
  const [messages, setMessages] = useState<Array<{ role: "user" | "assistant"; content: string }>>([
    {
      role: "assistant",
      content:
        "Welcome, bronze trader! You don't have an AI Agent yet. Create one to unlock:\n• Personalized trading signals\n• Market analysis & recommendations\n• Game strategies\nAnd much more!\n\nType 'create agent' or click the button below to get started.",
    },
  ])
  const [input, setInput] = useState("")

  const capabilities = [
    { name: "AI Chat Assistant", locked: false },
    { name: "Real-time Price Data", locked: false },
    { name: "Market Sentiment Analysis", locked: false },
    { name: "Basic Portfolio View", locked: false },
    { name: "Game Recommendations", locked: false },
    { name: "Copy Trading (Conservative)", locked: true },
    { name: "Copy Trading (All Risk Levels)", locked: true },
    { name: "Auto-Trading (AI-Controlled)", locked: true },
  ]

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      setInput("")
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: "I'm analyzing your request. This feature will be available soon!" },
        ])
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-border bg-card hidden lg:flex flex-col p-6 overflow-y-auto shadow-lg shadow-primary/5">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-primary" />
            <h2 className="font-bold text-foreground">SKAI Agent</h2>
          </div>
          <p className="text-xs text-muted-foreground mb-4">AI Trading Assistant</p>
        </div>

        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-6 gap-2">
          <Plus className="w-4 h-4" />
          Create Agent
        </Button>

        <div className="space-y-1">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase mb-3">Capabilities</h3>
          {capabilities.map((cap, idx) => (
            <div key={idx} className="flex items-start gap-2 p-2 hover:bg-background rounded transition-colors">
              {cap.locked ? (
                <Lock className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              ) : (
                <CheckCircle2 className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
              )}
              <span className={`text-xs ${cap.locked ? "text-muted-foreground line-through" : "text-foreground"}`}>
                {cap.name}
              </span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Header showStats={false} />

        {/* Top Bar */}
        <div className="border-b border-border bg-card/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center gap-4 justify-between">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-bold">SKAI Agent</h1>
              <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded-full">
                AI Trading Assistant
              </span>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">23 messages</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="px-2 py-1 bg-success/20 text-success rounded text-xs font-medium">BUY</span>
                <div className="flex items-center gap-1 px-2 py-1 bg-background rounded text-xs">
                  <div className="w-2 h-2 rounded-full bg-warning" />
                  <span className="text-muted-foreground">48%</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">Bronze tier</span>
              <Button variant="ghost" size="sm">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Upgrade Banner */}
        <div className="bg-gradient-to-r from-secondary/20 to-secondary/10 border-b border-secondary/30 px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold text-foreground">Upgrade to Silver</h3>
              <p className="text-sm text-muted-foreground">Unlock 100 AI chats/day and more powerful AI features</p>
            </div>
            <div className="flex items-center gap-4 whitespace-nowrap">
              <span className="text-sm font-semibold text-foreground">Starting at $9.99/mo</span>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Upgrade Now</Button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-border bg-card/30 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 min-w-full">
            {["Chat", "Bot", "Buckets", "Signals", "Insights", "Alerts", "News", "Calendar", "Perf"].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  tab === "Chat"
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
            <button className="ml-auto px-4 py-3 text-sm text-muted-foreground hover:text-foreground">More</button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          <div className="space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-md lg:max-w-2xl ${
                    msg.role === "user"
                      ? "bg-primary/20 text-foreground border border-primary/50 rounded-lg rounded-tr-none"
                      : "bg-card border border-border rounded-lg rounded-tl-none shadow-lg shadow-primary/5"
                  } p-4`}
                >
                  <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              <button className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors text-left shadow-lg shadow-primary/5">
                <p className="text-sm font-medium text-foreground mb-1">Show me the best buying opportuniti...</p>
                <p className="text-xs text-muted-foreground">Get market analysis</p>
              </button>
              <button className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors text-left shadow-lg shadow-primary/5">
                <p className="text-sm font-medium text-foreground mb-1">Find buying opportunities</p>
                <p className="text-xs text-muted-foreground">Market signals</p>
              </button>
              <button className="p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors text-left shadow-lg shadow-primary/5">
                <p className="text-sm font-medium text-foreground mb-1">Best entry points</p>
                <p className="text-xs text-muted-foreground">Trading insights</p>
              </button>
            </div>
          )}
        </div>

        {/* Chat Input */}
        <div className="border-t border-border bg-card/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Connect wallet & create agent to start..."
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Mic className="w-5 h-5" />
              </Button>
              <Button onClick={handleSend} className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Create an AI Agent to unlock personalized trading assistance
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
