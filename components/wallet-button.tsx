"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet, LogOut } from "lucide-react"
import { useWallet } from "@/hooks/use-wallet"

export function WalletButton() {
  const { connected, address, loading, connectWallet, disconnectWallet } = useWallet()
  const [menuOpen, setMenuOpen] = useState(false)

  if (connected && address) {
    return (
      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/50 rounded-lg transition-colors text-sm font-medium text-primary"
        >
          <Wallet className="w-4 h-4" />
          {address.slice(0, 6)}...{address.slice(-4)}
        </button>

        {menuOpen && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-50">
            <button
              onClick={() => {
                disconnectWallet()
                setMenuOpen(false)
              }}
              className="w-full px-4 py-2 text-left text-sm text-destructive hover:bg-destructive/10 flex items-center gap-2 rounded-t-lg"
            >
              <LogOut className="w-4 h-4" />
              Disconnect
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <Button
      onClick={() => connectWallet("metamask")}
      disabled={loading}
      className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      <Wallet className="w-4 h-4" />
      {loading ? "Connecting..." : "Connect Wallet"}
    </Button>
  )
}
