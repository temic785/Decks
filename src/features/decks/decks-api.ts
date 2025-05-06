import axios from 'axios'
import { BaseResponse, CreateDeckResponse } from './DecksList/DeckItem/DecksType.ts'

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
createDeck(name:string) {
    return instance.post<CreateDeckResponse>('/v1/decks',{name})
}
}
