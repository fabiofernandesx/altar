import { create } from 'zustand'

type Store = {
  grid: string[]
  code: string
  isRunning: boolean
  isBiasFrozen: boolean
  bias: string
  setGrid: (grid: string[]) => void
  setCode: (code: string) => void
  setIsRunning: (isRunning: boolean) => void
  setIsBiasFrozen: (isBiasFrozen: boolean) => void
  setBias: (bias: string) => void
}

export const useStore = create<Store>((set) => ({
  grid: [],
  code: '',
  isRunning: false,
  bias: '',
  isBiasFrozen: false,
  setGrid: (grid) => set({ grid }),
  setCode: (code) => set({ code }),
  setIsRunning: (isRunning) => set({ isRunning }),
  setBias: (bias) => set({ bias }),
  setIsBiasFrozen: (isBiasFrozen) => set({ isBiasFrozen }),
}))
