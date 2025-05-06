import { ItemDecks } from './DecksList/DeckItem/DecksType.ts'

const initialState = {
  decks: [] as ItemDecks[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const setDecksAC = (decks: ItemDecks[]) => {
  return { type: 'SET_DECKS_AC', payload: { decks } }
}
export type SetDecksActionType = ReturnType<typeof setDecksAC>

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS_AC':
      return { ...state, decks: action.payload.decks }
    default:
      return state
  }
}

type DecksActions = SetDecksActionType
