import { useSyncExternalStore } from 'react'

// Tiny shared store so other parts of the page (e.g. the sidebar's seabed) can react
// when the fish tank breaks or is refilled.

let broken = false
const listeners = new Set<() => void>()

export function setTankBroken(value: boolean) {
  if (broken === value) return
  broken = value
  listeners.forEach((notify) => notify())
}

const subscribe = (notify: () => void) => {
  listeners.add(notify)
  return () => {
    listeners.delete(notify)
  }
}

export function useTankBroken() {
  return useSyncExternalStore(subscribe, () => broken)
}
