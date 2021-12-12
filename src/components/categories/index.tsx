import React from 'react'
import { CategoriesI } from '../../interfacesAndTypes/game'
import { HomeSection } from '../../styles/globalComponents/HomeSection'
import { categoriesArray } from './categoriesArray'
import { CategoriesContainer, CategoryBox } from './styles'

interface CategoriesProps {
  categories: CategoriesI[]
}

export const Categories = (): JSX.Element => {
  return (
    <HomeSection>
      <h1>Categories</h1>
      <CategoriesContainer>
        {categoriesArray.map(e => (
          <CategoryBox key={e.name}>
            {e.icon}
            <div>{e.name}</div>
          </CategoryBox>
        ))}
      </CategoriesContainer>
    </HomeSection>
  )
}
