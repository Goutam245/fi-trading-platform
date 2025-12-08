"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Zap, ChevronDown, RefreshCw, Users, ArrowDownLeft, ArrowUpRight } from "lucide-react"
import { useState } from "react"

export default function PlayPage() {
  const [activeGame, setActiveGame] = useState("hi-lo")
  const [betAmount, setBetAmount] = useState(0.1)
  const [riskLevel, setRiskLevel] = useState(49)
  const [diceRolling, setDiceRolling] = useState(false)
  const [lastResult, setLastResult] = useState<"win" | "loss" | null>(null)

  const games = [
    { id: "hi-lo", name: "Hi-Lo", new: false },
    { id: "blackjack", name: "Blackjack", new: false },
    { id: "crash", name: "Crash", new: true },
    { id: "coin-flip", name: "Coin Flip", new: true },
  ]

  const handleRoll = (direction: "lo" | "hi") => {
    setDiceRolling(true)
    setTimeout(() => {
      setDiceRolling(false)
      setLastResult(Math.random() > 0.5 ? "win" : "loss")
    }, 1000)
  }

  const handleBetChange = (factor: number) => {
    setBetAmount(Math.max(0.1, betAmount * factor))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header showStats={false} />

      {/* Main Content */}
      <main className="min-h-[calc(100vh-200px)] flex flex-col">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent pointer-events-none" />

          <div className="relative max-w-3xl mx-auto space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Roll the Dice.</h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient-pink">Win Big.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Provably fair games with verifiable results. Choose your game and win big!
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        </section>

        {/* Game Tabs */}
        <div className="bg-card/30 backdrop-blur-sm border-b border-border px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto">
            {games.map((game) => (
              <button
                key={game.id}
                onClick={() => setActiveGame(game.id)}
                className={`px-4 py-3 font-medium transition-all whitespace-nowrap flex items-center gap-2 ${
                  activeGame === game.id
                    ? "bg-gradient-to-r from-secondary to-orange-500 text-white shadow-lg shadow-secondary/50"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {game.name}
                {game.new && <span className="text-xs bg-white/20 px-2 py-0.5 rounded font-semibold">NEW</span>}
              </button>
            ))}
          </div>
        </div>

        {/* Game Content */}
        {activeGame === "hi-lo" && (
          <section className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
              {/* Main Game Card */}
              <div className="lg:col-span-2">
                <div className="bg-card border border-border rounded-lg p-8 card-glow">
                  {/* Game Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold">Hi-Lo Dice</h3>
                      <p className="text-sm text-muted-foreground mt-1">Vault: 67700.61 SKAI</p>
                    </div>
                    <Button variant="outline" size="sm" className="bg-transparent">
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Dice Display */}
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {[0, 0, 0, 0].map((_, idx) => (
                      <div
                        key={idx}
                        className={`aspect-square bg-background border-2 border-border rounded-lg flex items-center justify-center text-3xl font-bold transition-all ${
                          diceRolling ? "animate-pulse" : ""
                        }`}
                      >
                        {diceRolling ? "?" : "0"}
                      </div>
                    ))}
                  </div>

                  {/* Bet Amount Control */}
                  <div className="bg-background/50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">Bet Amount</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleBetChange(0.5)}
                          className="px-2 py-1 text-xs font-semibold bg-border hover:bg-border/80 rounded transition-colors"
                        >
                          ½
                        </button>
                        <button
                          onClick={() => handleBetChange(2)}
                          className="px-2 py-1 text-xs font-semibold bg-border hover:bg-border/80 rounded transition-colors"
                        >
                          2x
                        </button>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-primary">{betAmount.toFixed(2)}</div>
                  </div>

                  {/* Win/Payout Display */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-background/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Win Chance</p>
                      <p className="text-2xl font-bold text-foreground">49.0%</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Payout</p>
                      <p className="text-2xl font-bold text-primary">2.00x</p>
                    </div>
                  </div>

                  {/* Risk Slider */}
                  <div className="bg-background/50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <span>High Risk / High Reward</span>
                      <span>Low Risk / Low Reward</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={riskLevel}
                      onChange={(e) => setRiskLevel(Number(e.target.value))}
                      className="w-full h-2 bg-background rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, rgb(123, 63, 242) 0%, rgb(123, 63, 242) ${riskLevel}%, rgb(31, 32, 36) ${riskLevel}%, rgb(31, 32, 36) 100%)`,
                      }}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Button
                      onClick={() => handleRoll("lo")}
                      disabled={diceRolling}
                      className="h-16 bg-gradient-to-br from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-base group"
                    >
                      <ArrowDownLeft className="mr-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                      BET LO
                    </Button>
                    <Button
                      onClick={() => handleRoll("hi")}
                      disabled={diceRolling}
                      className="h-16 bg-gradient-to-br from-success to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold text-base group"
                    >
                      <ArrowUpRight className="mr-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                      BET HI
                    </Button>
                  </div>

                  {/* Profit Display */}
                  {lastResult && (
                    <div
                      className={`p-4 rounded-lg border ${
                        lastResult === "win"
                          ? "bg-success/10 border-success/50"
                          : "bg-destructive/10 border-destructive/50"
                      }`}
                    >
                      <p className="text-sm text-muted-foreground mb-1">
                        {lastResult === "win" ? "Profit on Win" : "Loss"}
                      </p>
                      <p className={`text-2xl font-bold ${lastResult === "win" ? "text-success" : "text-destructive"}`}>
                        {lastResult === "win" ? "+" : "-"}0.1000 SKAI
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">(2.00x payout)</p>
                    </div>
                  )}

                  {/* Game History & Provably Fair */}
                  <div className="flex items-center gap-2 mt-6 pt-6 border-t border-border">
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                      <RefreshCw className="w-4 h-4" />
                      Show History
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground ml-auto">
                      <Zap className="w-4 h-4" />
                      Provably Fair
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1 space-y-6">
                {/* Players Online */}
                <div className="bg-card border border-border rounded-lg p-6 card-glow text-center">
                  <div className="flex items-center justify-center gap-2 text-sm mb-2">
                    <div className="w-2 h-2 bg-success rounded-full" />
                    <span className="text-muted-foreground">253 players online</span>
                  </div>
                </div>

                {/* Recent Games */}
                <div className="bg-card border border-border rounded-lg p-6 card-glow">
                  <h4 className="font-bold mb-4">Recent Games</h4>
                  <div className="space-y-2">
                    {[...Array(5)].map((_, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-background/50 rounded text-sm">
                        <span className="text-muted-foreground">Roll #{idx + 1}</span>
                        <span className={idx % 2 === 0 ? "text-success font-medium" : "text-destructive font-medium"}>
                          {idx % 2 === 0 ? "Win" : "Loss"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-col gap-2">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                    <Zap className="w-4 h-4" />
                    Exchange
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent gap-2">
                    <Users className="w-4 h-4" />
                    Earn
                  </Button>
                </div>
              </aside>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
