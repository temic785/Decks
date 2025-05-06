export type ItemDecks = {
  isFavorite: boolean
  author: {
    id: string
    name: string
  }
  id: string
  userId: string
  name: string
  isPrivate: boolean
  cover: string
  created: string
  updated: string
  cardsCount: number
}
export type PaginationDocks = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  totalItems: number
}
export type BaseResponse = {
  items: ItemDecks[]
  pagination: PaginationDocks
}