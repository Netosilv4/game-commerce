import styled from 'styled-components'

export const ChartInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  font-size: 12px;
  align-items: center;
  padding: 10px;
  top: 400;
  right: 0;
  h1 {
    font-size: 18px;
    color: ${props => props.theme.colors.primary};
    font-weight: normal;
  }
  span {
    color: ${props => props.theme.colors.textSecondary};
  }
  margin-bottom: 20px;
  border-bottom: 1px solid ${props => props.theme.colors.textSecondary};
`
