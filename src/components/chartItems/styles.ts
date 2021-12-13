import styled from 'styled-components'

export const ChartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`

export const ItemWrapper = styled.div`
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors.button};
  width: 300px;
`

export const BuyDetails = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const InfoTable = styled.table``

export const InfoTableRow = styled.tr``
