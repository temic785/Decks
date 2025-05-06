import s from './DecksList.module.css'
import { useEffect } from 'react'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useSelector } from 'react-redux'
import { AppRootState, useAppDispatch } from '../../../app/store.ts'
import { createDeckThunk, getDecksThunks } from '../decks-thunks.ts'
import { createDeckAC } from '../decks-reducer.ts'

export const DecksList = () => {
  const decks = useSelector((state: AppRootState) => state.decksReducer.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getDecksThunks())
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((d) => (
        <DeckItem key={d.id} deck={d} />
      ))}
    </ul>
  )
}
