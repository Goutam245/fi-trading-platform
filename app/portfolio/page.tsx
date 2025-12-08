"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Trophy, Wallet, Medal, Star, Link2, Settings2, RefreshCw } from "lucide-react"
import { useState } from "react"

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("holdings")

  const summaryCards = [
    { icon: Trophy, label: "SKAI Points", value: "960", color: "text-yellow-400" },
    { icon: Wallet, label: "Vault Balance", value: "87.8K SKAI", color: "text-primary" },
    { icon: Medal, label: "Badges Earned", value: "7", color: "text-orange-400" },
    { icon: Star, label: "Current Tier", value: "Bronze", color: "text-purple-400", gradient: true },
  ]

  const tokens = [
    {
      name: "Ether",
      symbol: "ETH",
      network: "Base",
      address: "0xc1...DES",
      amount: "0.364873",
      value: "$1,111.91",
      change: "+0.6%",
    },
    {
      name: "Ether",
      symbol: "ETH",
      network: "Base",
      address: "0x9A...18F",
      amount: "0.138497",
      value: "$422.05",
      change: "+0.6%",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {summaryCards.map((card, idx) => {
            const Icon = card.icon
            return (
              <div
                key={idx}
                className={`bg-card border border-border rounded-lg p-6 shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-shadow ${
                  card.gradient ? "bg-gradient-to-br from-secondary/10 to-purple-500/5" : ""
                }`}
              >
                <Icon className={`w-8 h-8 ${card.color} mb-3`} />
                <p className="text-muted-foreground text-sm mb-1">{card.label}</p>
                <p className="text-2xl font-bold text-foreground">{card.value}</p>
              </div>
            )
          })}
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-border">
          {["holdings", "vault", "badges"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium transition-colors capitalize border-b-2 ${
                activeTab === tab
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Section */}
        {activeTab === "holdings" && (
          <div className="space-y-6">
            {/* Portfolio Header */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg shadow-primary/5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-2xl font-bold mb-1">Portfolio</h2>
                  <p className="text-sm text-muted-foreground">
                    Your tokens across Base, Ethereum, BNB Chain & Hyperliquid • 2 wallets linked
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Link2 className="w-4 h-4" />
                    Link Wallet
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Settings2 className="w-4 h-4" />
                    Manage Wallets
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                  </Button>
                </div>
              </div>

              {/* Portfolio Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Total Value (USD)</p>
                  <p className="text-2xl font-bold text-primary">$1.53K</p>
                  <p className="text-xs text-muted-foreground mt-2">Across 2 wallets</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Total Tokens</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <div className="bg-background/50 rounded-lg p-4 border border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Base (2 tokens)</p>
                  <p className="text-2xl font-bold text-primary">$1.53K</p>
                </div>
              </div>
            </div>

            {/* Wallet Breakdown */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg shadow-primary/5">
              <h3 className="text-lg font-bold mb-4">Wallet Breakdown</h3>
              <div className="space-y-4">
                {[
                  {
                    addr: "0xc1EF...50EB",
                    badge: "Primary Wallet",
                    status: "Active",
                    value: "$1.11K",
                    tokens: 6,
                    percent: "72.5%",
                  },
                  {
                    addr: "0x94f9...A18C",
                    badge: "Linked",
                    status: null,
                    value: "$422.05",
                    tokens: 6,
                    percent: "27.5%",
                  },
                ].map((wallet, idx) => (
                  <div key={idx} className="bg-background/50 rounded-lg p-4 border border-border/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm font-medium">{wallet.addr}</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          {wallet.badge}
                        </span>
                        {wallet.status && (
                          <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                            {wallet.status}
                          </span>
                        )}
                      </div>
                      <span className="font-semibold text-primary">{wallet.value}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span>{wallet.tokens} tokens</span>
                      <span>•</span>
                      <span>{wallet.percent} of total</span>
                    </div>
                    <div className="w-full h-1 bg-background rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        style={{ width: wallet.percent }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Token List */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg shadow-primary/5">
              <h3 className="text-lg font-bold mb-4">Holdings</h3>
              <div className="space-y-3">
                {tokens.map((token, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50 hover:border-border transition-colors"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                        Ξ
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{token.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {token.network} • {token.address}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-foreground">
                        {token.amount} {token.symbol}
                      </p>
                      <p className="flex items-center justify-end gap-2">
                        <span className="text-sm text-foreground">{token.value}</span>
                        <span className="text-sm text-success font-medium">{token.change}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
