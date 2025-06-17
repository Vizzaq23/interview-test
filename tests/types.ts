export interface VoiceEntry {
  id: string
  user_id: string
  transcript_raw: string
  transcript_user: string
  tags_user: string[]
  audio_url: string | null
  language_detected: string
  language_rendered: string
  tags_model: string[]
  category: string | null
  created_at: string
  updated_at: string
  emotion_score_score: number | null
  embedding: number[] | null
} 