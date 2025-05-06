import { Dispatch } from 'redux'
import { decksApi } from './decks-api.ts'
import { setDecksAC } from './decks-reducer.ts'

export const decksThunks = () => {
  return async (dispatch: Dispatch) => {
    try {
      const res = await decksApi.getDecks()
      dispatch(setDecksAC(res.data.items))
    } catch (error) {
      return error
    }
  }
}
