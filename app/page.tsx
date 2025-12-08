import Link from "next/link"
import { ArrowRight, Zap, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Navigation */}
      <nav className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient-teal-purple">SKAI.trade</div>
          <div className="flex items-center gap-4">
            <Link href="/portfolio" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Portfolio
            </Link>
            <Link href="/ai-agent" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              AI Agent
            </Link>
            <Link href="/buckets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Trading
            </Link>
            <Link href="/play" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Play
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-20">
          <div className="space-y-6">
            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">Trade Smarter.</h1>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient-teal-purple">Win Bigger.</h2>
            </div>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              AI-powered perpetual trading, prediction markets, and provably fair gaming. All in one decentralized
              ecosystem.
            </p>

            {/* Free Roll Card */}
            <div className="bg-card border border-border rounded-lg p-4 sm:p-6 card-glow inline-flex items-center gap-4 mx-auto">
              <Zap className="w-6 h-6 text-primary" />
              <div className="text-left">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Free SKAI Roll</span>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">5 day streak</span>
                </div>
                <p className="text-sm text-muted-foreground">Win 0.5 - 500 SKAI • Earned: 39.50</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground ml-4">Roll Now</Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/play">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base group">
                  Start Trading
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/ai-agent">
                <Button
                  variant="outline"
                  className="h-12 px-8 text-base border-border hover:border-primary bg-transparent"
                >
                  <MessageSquare className="mr-2 w-4 h-4" />
                  Ask AI Copilot
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      </section>
    </div>
  )
}
