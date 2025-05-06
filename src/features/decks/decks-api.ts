import axios from 'axios'
import { BaseResponse } from './DecksList/DeckItem/DecksType.ts'

export const instance = axios.create({
  baseURL: 'https://api.flashcards.andrii.es',
  headers: {
    'x-auth-skip': true,
  },
})

export const decksApi = {
  getDecks() {
    return instance.get<BaseResponse>('/v2/decks')
  },
}
