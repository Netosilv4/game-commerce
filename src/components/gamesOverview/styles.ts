import styled from 'styled-components'

export const GameBoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
  gap: 20px;
  justify-content: center;
  align-items: center;
`

export const GameBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  justify-content: space-between;
`

export const Title = styled.div`
  color: ${props => props.theme.colors.text};
  background-color: ${props => props.theme.colors.textSecondary};
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 10px;
  font-weight: 700;
`
export const PriceTag = styled.span`
  background-color: ${props => props.theme.colors.button};
  min-width: 30px;
  max-width: 30%;
  padding: 20px;
  border-radius: 0 0 10px 0;
  color: white;
  font-weight: 700;
`
