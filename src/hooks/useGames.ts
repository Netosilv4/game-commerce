import axios from 'axios'
import { useEffect, useState } from 'react'
import { GameI } from '../interfacesAndTypes/game'

interface useGamesI {
  games: GameI[]
  selectedGame: GameI
  setSelectedGame: (game: GameI) => void
  apiResponse: ApiResponse
  sendEdit: () => void
  selectedFile: File
  setSelectedFile: (file: File) => void
}

export interface ApiResponse {
  code: number
  message: string
}

const useGames = (): useGamesI => {
  const [games, setGames] = useState<GameI[]>([])
  const [selectedGame, setSelectedGame] = useState<GameI>()
  const [apiResponse, setApiResponse] = useState<ApiResponse>(undefined)
  const [selectedFile, setSelectedFile] = useState<File>()

  const getGames = async () => {
    const response = await axios.get('http://localhost:4000/game')
    setGames(response.data)
  }

  useEffect(() => {
    getGames()
  }, [])

  const sendEdit = async () => {
    try {
      const formData = new FormData()

      formData.append('file', selectedFile)

      formData.append('game', JSON.stringify(selectedGame))

      const response = await axios.put(
        `http://localhost:4000/game/update/${selectedGame._id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      if (response.data._id === selectedGame._id) {
        setApiResponse({
          code: 200,
          message:
            'Game updated successfully, wait until next re-render to see changes'
        })
      }
    } catch (error) {
      if (error.response) {
        console.log('to aqui no erro')
        console.log(error.response.data.message)
        setApiResponse({
          code: error.response.status,
          message: error.response.data.message
        })
      } else {
        setApiResponse({
          code: 500,
          message: 'Something went wrong, please try again in a few minutes'
        })
      }
    }
  }

  return {
    games,
    selectedGame,
    setSelectedGame,
    apiResponse,
    sendEdit,
    selectedFile,
    setSelectedFile
  }
}

export default useGames
