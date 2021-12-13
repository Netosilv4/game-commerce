import { useEffect, useState } from 'react'
import { GameI } from '../interfacesAndTypes/game'

export interface useChartProps {
  items: GameI[]
  addToChart: (item: GameI) => void
  removeFromChart: (item: GameI) => void
  clearChart: () => void
  total: number
  quantity: number
  hidden: boolean
  setHidden: (value: boolean) => void
}

const useChart = (): useChartProps => {
  const [items, setItems] = useState<GameI[]>([])
  const [total, setTotal] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(0)
  const [hidden, setHidden] = useState<boolean>(true)

  useEffect(() => {
    saveLocalStorage()
    setQuantity(items.length)
    setTotal(items.reduce((acc, curr) => acc + curr.price, 0))
  }, [items])

  const saveLocalStorage = () => {
    localStorage.setItem('chartItems', JSON.stringify(items))
  }

  const addToChart = (item: GameI) => {
    setItems([...items, item])
  }

  const removeFromChart = (item: GameI) => {
    setItems(items.filter(i => i._id !== item._id))
  }

  const clearChart = () => {
    setItems([])
  }

  return {
    items,
    addToChart,
    removeFromChart,
    clearChart,
    total,
    quantity,
    hidden,
    setHidden
  }
}

export default useChart
