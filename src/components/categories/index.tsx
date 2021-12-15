import React from 'react'
import { FormTitle } from '../../styles/globalComponents/Forms'
import { HomeSection } from '../../styles/globalComponents/HomeSection'
import { categoriesArray } from './categoriesArray'
import { CategoriesContainer, CategoryBox } from './styles'

export const Categories = (): JSX.Element => {
  return (
    <HomeSection>
      <FormTitle>Categories</FormTitle>
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
