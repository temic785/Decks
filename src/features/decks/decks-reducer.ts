import { ItemDecks } from './DecksList/DeckItem/DecksType.ts'
import { createDeckThunk } from './decks-thunks.ts'

const initialState = {
  decks: [] as ItemDecks[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const setDecksAC = (payload: { decks: ItemDecks[] }) => {
  return { type: 'SET_DECKS_AC', payload } as const
}
export const createDeckAC = (newDeck: ItemDecks) => {
  return { type: 'CREATE_DECKS_AC', payload: newDeck } as const
}
export type SetDecksActionType = ReturnType<typeof setDecksAC>
export type CreateDeckActionType = ReturnType<typeof createDeckAC>

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case 'SET_DECKS_AC':
      return { ...state, decks: action.payload.decks }
    case 'CREATE_DECKS_AC':
      return { ...state, decks: [action.payload,...state.decks ] }
    default:
      return state
  }
}

type DecksActions = SetDecksActionType | CreateDeckActionType
