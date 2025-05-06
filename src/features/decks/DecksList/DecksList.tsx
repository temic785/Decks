import s from './DecksList.module.css'
import { useEffect } from 'react'
import { DeckItem } from './DeckItem/DeckItem.tsx'
import { useSelector } from 'react-redux'
import { AppRootState, useAppDispatch } from '../../../app/store.ts'
import { decksThunks } from '../decks-thunks.ts'

export const DecksList = () => {
  const decks = useSelector((state: AppRootState) => state.decksReducer.decks)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(decksThunks())
  }, [])

  return (
    <ul className={s.list}>
      {decks.map((d) => (
        <DeckItem key={d.id} deck={d} />
      ))}
    </ul>
  )
}
