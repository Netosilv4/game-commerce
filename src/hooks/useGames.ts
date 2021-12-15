/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useEffect, useState } from 'react'
import { GameI } from '../interfacesAndTypes/game'
import { UserI } from '../interfacesAndTypes/users'
import { GameStructure } from '../utils/gameStructure'

interface useGamesI {
  games: GameI[]
  selectedGame: GameI
  setSelectedGame: (game: GameI) => void
  apiResponse: ApiResponse
  sendEdit: () => void
  selectedFile: File
  setSelectedFile: (file: File) => void
  newGame: GameI
  setNewGame: (game: GameI) => void
  sendAdd: () => void
  setSelectedFileThumb: (file: File) => void
  deleteGame: () => void
}

export interface ApiResponse {
  code: number
  message: string
}

const useGames = (user: UserI): useGamesI => {
  const [games, setGames] = useState<GameI[]>([])
  const [selectedGame, setSelectedGame] = useState<GameI>()
  const [apiResponse, setApiResponse] = useState<ApiResponse>(undefined)
  const [selectedFile, setSelectedFile] = useState<File>()
  const [selectedFileThumb, setSelectedFileThumb] = useState<File>()
  const [newGame, setNewGame] = useState<any>(GameStructure)

  const getGames = async () => {
    const response = await axios.get('http://localhost:4000/game')
    setGames(response.data)
  }

  useEffect(() => {
    getGames()
  }, [])

  const deleteGame = async () => {
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${user.token}`
      const response = await axios.post(
        `http://localhost:4000/game/delete/${selectedGame._id}`,
        { auth: user.auth }
      )
      setApiResponse({ code: response.status, message: 'Game deleted' })
      alert('Game deleted, wait until next static generation to see changes.')
      getGames()
      setSelectedGame(undefined)
    } catch (err) {
      if (err.response) {
        setApiResponse({
          code: err.response.status,
          message: err.response.data.message
        })
      } else {
        setApiResponse({
          code: 500,
          message: 'Internal error, try again in a few minutes'
        })
      }
    }
  }

  const sendAdd = async () => {
    try {
      console.log(user)
      axios.defaults.headers.common.Authorization = `Bearer ${user.token}`
      const game = {
        ...newGame,
        genres: newGame.genres.split(', ')
      }
      const formData = new FormData()
      formData.append('gameHero', selectedFile)
      formData.append('gameThumb', selectedFileThumb)
      formData.append('game', JSON.stringify(game))
      formData.append('auth', JSON.stringify(user.auth))
      const response = await axios.post(
        'http://localhost:4000/game/create',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      setApiResponse(response.data.message)
      alert('Game added, wait until next static generation to see changes.')
      getGames()
      setSelectedGame(undefined)
    } catch (error) {
      console.log(error)
      if (error.response) {
        setApiResponse({
          code: error.response.status,
          message: error.response.data.message
        })
      } else {
        setApiResponse({ code: 0, message: 'Unknown error' })
      }
    }
  }

  const sendEdit = async () => {
    try {
      axios.defaults.headers.common.Authorization = `Bearer ${user.token}`
      const formData = new FormData()
      formData.append('gameHero', selectedFile)
      formData.append('gameThumb', selectedFileThumb)
      formData.append('game', JSON.stringify(selectedGame))
      formData.append('auth', JSON.stringify(user.auth))

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
      alert('Game updated, wait until next static generation to see changes.')
      getGames()
      setSelectedGame(undefined)
    } catch (error) {
      if (error.response) {
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
    setSelectedFile,
    newGame,
    setNewGame,
    sendAdd,
    setSelectedFileThumb,
    deleteGame
  }
}

export default useGames
