"use client"

import { useState, useCallback } from "react"

export interface WalletState {
  connected: boolean
  address: string | null
  balance: number | null
}

export function useWallet() {
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    address: null,
    balance: null,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const connectWallet = useCallback(async (walletType: string) => {
    setLoading(true)
    setError(null)
    try {
      // Mock wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock wallet data
      const mockAddress = "0x" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
      const mockBalance = Math.random() * 100

      setWallet({
        connected: true,
        address: mockAddress,
        balance: mockBalance,
      })
    } catch (err) {
      setError("Failed to connect wallet")
    } finally {
      setLoading(false)
    }
  }, [])

  const disconnectWallet = useCallback(() => {
    setWallet({
      connected: false,
      address: null,
      balance: null,
    })
  }, [])

  return {
    ...wallet,
    loading,
    error,
    connectWallet,
    disconnectWallet,
  }
}
