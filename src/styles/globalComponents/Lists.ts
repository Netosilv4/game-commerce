import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  :hover {
    background-color: #000;
    color: #fff;
  }
`

export const List = styled.ul`
  list-style: none;
  padding: 20px;
  margin-top: 20px;
`
