"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Zap, RefreshCw, Settings2, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function BucketsPage() {
  const [expandedStrategy, setExpandedStrategy] = useState<string | null>(null)

  const marketSignals = [
    {
      ticker: "ETH",
      status: "NEUTRAL",
      statusColor: "bg-yellow-500/20 text-yellow-400",
      metric: "Cycle phase: CREST",
      progress: 57,
    },
    {
      ticker: "ETH",
      status: "NEUTRAL",
      statusColor: "bg-yellow-500/20 text-yellow-400",
      metric: "Whale activity: Quiet, Magnitude: -1.39",
      progress: null,
    },
    {
      ticker: "ETH",
      status: "LONG",
      statusColor: "bg-success/20 text-success",
      metric: "Market regime: BUY",
      progress: 70,
    },
    {
      ticker: "ETH",
      status: "LONG",
      statusColor: "bg-success/20 text-success",
      metric: "Momentum: STRONG, Strength: 84%",
      progress: 72,
    },
  ]

  const strategies = [
    {
      id: "market-making",
      title: "Market Making",
      description: "Provide liquidity and earn from bid-ask spreads",
      active: "3/3",
      totalBalance: "6.0000 ETH",
      allocated: "0.0000 ETH",
      profit: "+0.0000 ETH",
      trades: 0,
      subStrategies: [
        { name: "Conservative", balance: "3.00 ETH", win: "0.0%", trades: 0, change: "+0.00%", used: 0 },
        { name: "Moderate", balance: "2.00 ETH", win: "0.0%", trades: 0, change: "+0.00%", used: 0 },
        { name: "Aggressive", balance: "1.00 ETH", win: "0.0%", trades: 0, change: "+0.00%", used: 0 },
      ],
    },
    {
      id: "mev-protection",
      title: "MEV Protection",
      description: "Protect transactions and extract MEV value",
      active: "3/3",
      totalBalance: "3.5000 ETH",
      allocated: "0.0000 ETH",
      profit: "+0.0000 ETH",
      trades: 0,
      subStrategies: [
        { name: "Conservative", balance: "1.00 ETH", win: "0.0%", trades: 0, change: "+0.00%", used: 0 },
        { name: "Moderate", balance: "2.00 ETH", win: "0.0%", trades: 0, change: "+0.00%", used: 0 },
        { name: "Aggressive", balance: "0.50 ETH", win: "0.0%", trades: 0, change: "+0.00%", used: 0 },
      ],
    },
    {
      id: "ai-trading",
      title: "AI Auto Trading",
      description: "Automated trading based on AI signals",
      active: "0/0",
      totalBalance: "0.0000 ETH",
      allocated: "0.0000 ETH",
      profit: "+0.0000 ETH",
      trades: 0,
      subStrategies: [],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header showStats={false} />

      {/* Top Bar */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-primary" />
            <div>
              <h1 className="text-xl font-bold">Trading Buckets</h1>
              <p className="text-xs text-muted-foreground">Manage your automated trading strategies</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <RefreshCw className="w-4 h-4" />
            Refresh
          </Button>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {strategies.map((strategy) => (
              <div
                key={strategy.id}
                className="bg-card border border-border rounded-lg overflow-hidden shadow-lg shadow-primary/5"
              >
                {/* Strategy Header */}
                <div className="p-6 border-b border-border/50">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{strategy.title}</h3>
                      <p className="text-sm text-muted-foreground">{strategy.description}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ${
                        strategy.active === "0/0" ? "bg-muted/20 text-muted-foreground" : "bg-success/20 text-success"
                      }`}
                    >
                      {strategy.active} Active
                    </span>
                  </div>

                  {/* Stats Row */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="bg-background/50 rounded p-3">
                      <p className="text-xs text-muted-foreground mb-1">Total Balance</p>
                      <p className="font-semibold text-foreground text-sm">{strategy.totalBalance}</p>
                    </div>
                    <div className="bg-background/50 rounded p-3">
                      <p className="text-xs text-muted-foreground mb-1">Allocated</p>
                      <p className="font-semibold text-foreground text-sm">{strategy.allocated}</p>
                    </div>
                    <div className="bg-background/50 rounded p-3">
                      <p className="text-xs text-muted-foreground mb-1">Total Profit</p>
                      <p className="font-semibold text-success text-sm">{strategy.profit}</p>
                    </div>
                    <div className="bg-background/50 rounded p-3">
                      <p className="text-xs text-muted-foreground mb-1">Trades</p>
                      <p className="font-semibold text-foreground text-sm">{strategy.trades}</p>
                    </div>
                  </div>
                </div>

                {/* Sub-Strategies */}
                {strategy.subStrategies.length > 0 && (
                  <div className="p-6 space-y-3">
                    {strategy.subStrategies.map((sub, idx) => (
                      <div key={idx} className="bg-background/50 rounded-lg p-4 border border-border/50">
                        <div className="flex items-center justify-between gap-4 mb-3">
                          <div>
                            <h4 className="font-medium text-foreground">{sub.name}</h4>
                            <p className="text-xs text-muted-foreground">{sub.balance}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <label className="relative inline-flex items-center cursor-pointer">
                              <input type="checkbox" className="sr-only peer" defaultChecked />
                              <div className="w-11 h-6 bg-muted rounded-full peer-checked:bg-primary transition-colors" />
                              <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform" />
                            </label>
                            <Button variant="ghost" size="sm" className="text-muted-foreground">
                              <Settings2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-xs mb-2">
                          <span className="text-muted-foreground">
                            {sub.win} Win | {sub.trades} Trades | {sub.change}
                          </span>
                          <span className="text-muted-foreground">{sub.used}% used</span>
                        </div>
                        <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${sub.used || 1}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* AI Auto Trading Empty State */}
                {strategy.subStrategies.length === 0 && (
                  <div className="p-6 text-center">
                    <Zap className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">No strategies configured</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Sidebar - Market Signals */}
          <aside className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg shadow-primary/5 sticky top-32">
              <h3 className="text-lg font-bold mb-4">Market Signals</h3>
              <div className="space-y-3">
                {marketSignals.map((signal, idx) => (
                  <div
                    key={idx}
                    className="bg-background/50 rounded-lg p-4 border border-border/50 hover:border-border transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-semibold text-foreground">{signal.ticker}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded ${signal.statusColor}`}>
                        {signal.status}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-2 group-hover:text-foreground transition-colors">
                      {signal.metric}
                    </p>
                    {signal.progress && (
                      <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary"
                          style={{ width: `${signal.progress}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* PULSE Indicator */}
            <div className="bg-card border border-border rounded-lg p-6 mt-6 shadow-lg shadow-primary/5">
              <h4 className="text-sm font-bold mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-primary" />
                PULSE
              </h4>
              <div className="space-y-3">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Sentiment</p>
                  <p className="text-sm font-semibold text-yellow-400">NEUTRAL</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Buy Pressure</p>
                  <p className="text-sm font-semibold text-foreground">50%</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Volatility</p>
                  <p className="text-sm font-semibold text-foreground">MEDIUM</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  )
}
