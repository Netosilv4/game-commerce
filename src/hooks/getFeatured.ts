import { useState } from 'react'
const useFeatured = (): any => {
  const [featured, setFeatured] = useState([])

  return {
    featured,
    setFeatured
  }
}

export default useFeatured
