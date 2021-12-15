import styled from 'styled-components'

export const HeroContainer = styled.main`
  display: flex;
  width: 100%;
  max-height: 60vh;
  position: relative;
`
export const HeroImage = styled.img`
  width: 100%;
  object-fit: cover;
`
export const ImageContainer = styled.div`
  display: flex
  height: 60vh;
`

export const HeroInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: absolute;
  background-color: #232528;
  height: 350px;
  width: 400px;
  color: white;
  left: 10%;
  top: 5%;
  padding: 5vh;
  box-shadow: 1px 1px 5px #232528;
  h1 {
    font-weight: 300;
    letter-spacing: 5px;
  }
  @media (max-width: 600px) {
    background-color: rgba(0, 0, 0, 0.5);
    width: 80%;
    h1 {
      font-weight: 300;
      letter-spacing: 1px;
      font-size: 1.5rem;
    }
  }
`

export const HeroButton = styled.button`
  display: flex;
  align-self: center;
  justify-content: center;
  width: 90%;
  padding: 10px;
  background-color: ${props => props.theme.colors.primary};
  border: transparent;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`

export const AditionalInfoBox = styled.div`
  display: flex;
  gap: 5px;
  @media (max-width: 600px) {
    flex-wrap: wrap;
  }
`

export const InfoBox = styled.div`
  border: 1px solid black;
  padding: 3px;
`
