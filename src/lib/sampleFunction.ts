import { VoiceEntry } from './types'

export function processEntries(entries: VoiceEntry[]): VoiceEntry[] {
  const desireKeywords = ['want', 'wish', 'would like', 'hope', 'desire']
  const intentionKeywords = ['plan', 'intend', 'going to', 'will', 'aim']
  const goalKeywords = ['goal', 'objective', 'target', 'mission', 'ambition']

  return entries.map((entry) => {
    const text = entry.transcript?.toLowerCase() || ''
    const tags: string[] = []

    if (desireKeywords.some(word => text.includes(word))) {
      tags.push('desire')
    }
    if (intentionKeywords.some(word => text.includes(word))) {
      tags.push('intention')
    }
    if (goalKeywords.some(word => text.includes(word))) {
      tags.push('goal')
    }

    return {
      ...entry,
      tags_user: tags
    }
  })
}
