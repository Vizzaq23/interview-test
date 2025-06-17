import { processEntries } from '../src/lib/sampleFunction';
import { VoiceEntry } from '../src/lib/types';


const mockEntries: VoiceEntry[] = [
  {
    id: '1',
    user_id: 'user1',
    transcript_raw: 'I want to go for a run tomorrow.',
    transcript_user: 'I want to go for a run tomorrow.',
    tags_user: [],
    audio_url: null,
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    category: null,
    created_at: '2025-06-16',
    updated_at: '2025-06-16',
    emotion_score_score: null,
    embedding: null
  },
  {
    id: '2',
    user_id: 'user2',
    transcript_raw: 'I need to apply for jobs next week.',
    transcript_user: 'I need to apply for jobs next week.',
    tags_user: [],
    audio_url: null,
    language_detected: 'en',
    language_rendered: 'en',
    tags_model: [],
    category: null,
    created_at: '2025-06-16',
    updated_at: '2025-06-16',
    emotion_score_score: null,
    embedding: null
  }
];

const result = processEntries(mockEntries);
console.log(JSON.stringify(result, null, 2));
