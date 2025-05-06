import { Dispatch } from 'redux'
import { decksApi } from './decks-api.ts'
import { createDeckAC, setDecksAC } from './decks-reducer.ts'
import { ItemDecks } from './DecksList/DeckItem/DecksType.ts'

export const getDecksThunks = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await decksApi.getDecks()
      dispatch(setDecksAC({ decks: res.data.items }))
    } catch (error) {
      return error
    }
  }
}
export const createDeckThunk = (name: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await decksApi.createDeck(name)
      const newDeck: ItemDecks = {
        ...res.data,
        isFavorite: false,
        author: {
          id: res.data.id,
          name: res.data.name,
        },
      }
      dispatch(createDeckAC(newDeck))
    } catch (error) {
      return error
    }
  }
}
