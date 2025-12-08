"use client"

import Link from "next/link"
import { Search, Bell, Settings } from "lucide-react"
import { useState } from "react"
import { Navigation } from "./navigation"

interface HeaderProps {
  showStats?: boolean
}

export function Header({ showStats = true }: HeaderProps) {
  const [userMenuOpen, setUserMenuOpen] = useState(false)

  return (
    <header className="border-b border-border bg-background/50 backdrop-blur-md sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gradient-teal-purple flex-shrink-0">
            SKAI.trade
          </Link>

          {/* Search Bar */}
          {showStats && (
            <div className="hidden md:flex flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search markets, users, tokens..."
                  className="w-full pl-10 pr-4 py-2 bg-input border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
          )}

          {/* Stats */}
          {showStats && (
            <div className="hidden lg:flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">SKAI Points:</span>
                <span className="font-semibold text-foreground">960</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Vault Balance:</span>
                <span className="font-semibold text-foreground">87.8K SKAI</span>
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground">Gas Fee:</span>
                <span className="font-semibold text-foreground">0.5034</span>
              </div>
            </div>
          )}

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 hover:bg-card rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-destructive rounded-full" />
            </button>
            <button className="p-2 hover:bg-card rounded-lg transition-colors">
              <Settings className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </button>
            <Navigation />
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-2 hover:bg-card rounded-lg transition-colors text-sm font-medium"
              >
                <div className="w-6 h-6 bg-primary rounded-full" />
                <span className="hidden sm:inline">skaicasey</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex items-center gap-1 mt-4 text-sm border-t border-border pt-4 overflow-x-auto">
          {["AI", "Trade", "Buy", "Earn", "Lend", "Play", "Predict", "Governance"].map((item) => (
            <Link
              key={item}
              href={item === "Play" ? "/play" : "/"}
              className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors whitespace-nowrap"
            >
              {item}
            </Link>
          ))}
          <button className="px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-card rounded-lg transition-colors ml-auto whitespace-nowrap">
            Coming Soon
          </button>
        </div>
      </div>
    </header>
  )
}
