export interface GameI {
  _id: string
  name: string
  genres: string[]
  price: number
  publisher: string
  description: string
  releaseDate: string
  rate: number
  heroImage: string
  thumb: string
  numberOfPlayers: number
  multiplayerPlayers: number
  quantity: number
  featured: boolean
}

export interface CategoriesI {
  name: string
}
