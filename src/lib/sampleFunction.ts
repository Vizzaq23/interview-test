import { VoiceEntry } from './types'

export function processEntries(entries: VoiceEntry[]) {
  return entries.map(entry => ({
    ...entry,
    processed: true
  }))
} 