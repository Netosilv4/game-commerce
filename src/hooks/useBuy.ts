import axios from 'axios'
import { useState } from 'react'
import { GameI } from '../interfacesAndTypes/game'
import { UserI } from '../interfacesAndTypes/users'

interface useBuyProps {
  loading: boolean
  message: string
  buyItems: (user: UserI, chartItems: GameI[]) => void
}

const useBuy = (): useBuyProps => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const buyItems = async (user: UserI, chartItems: GameI[]) => {
    try {
      setLoading(true)
      const { token } = user
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      const { data } = await axios.post('http://localhost:4000/game/order', {
        items: chartItems,
        user
      })
      if (data) {
        setMessage('Compra efetuada com sucesso')
      }
      setLoading(false)
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message)
        setLoading(false)
      } else {
        setMessage('Internal server error')
        setLoading(false)
      }
    }
  }

  return {
    buyItems,
    message,
    loading
  }
}

export default useBuy
