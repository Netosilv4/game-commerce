import React, { createContext } from 'react'
import useChart, { useChartProps } from '../hooks/useChart'

export const ChartContext = createContext<useChartProps>({} as useChartProps)

const ChartProvider: React.FC = ({ children }) => {
  const {
    addToChart,
    clearChart,
    items,
    removeFromChart,
    quantity,
    total,
    hidden,
    setHidden
  } = useChart()
  return (
    <ChartContext.Provider
      value={{
        quantity,
        total,
        addToChart,
        clearChart,
        items,
        removeFromChart,
        hidden,
        setHidden
      }}
    >
      {children}
    </ChartContext.Provider>
  )
}

export default ChartProvider
