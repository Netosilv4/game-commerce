/* eslint-disable react/no-unescaped-entities */
import {
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
  FormSpan,
  SucessMessage
} from '../../styles/globalComponents/Forms'
import React, { useContext } from 'react'
import useGames from '../../hooks/useGames'
import { GameStructure } from '../../utils/gameStructure'
import { capitalize } from '../../utils/capitalize'
import { UserContext } from '../../contexts/UserContext'

const AddGameForm = (): JSX.Element => {
  const { user } = useContext(UserContext)
  const {
    newGame,
    setNewGame,
    apiResponse,
    sendAdd,
    setSelectedFile,
    setSelectedFileThumb
  } = useGames(user)
  return (
    <FormContainer>
      {Object.keys(GameStructure)
        .filter((key: string) => key !== 'releaseDate')
        .map((key: string) => {
          return (
            <FormLabel key={key}>
              <FormSpan>{capitalize(key)}:</FormSpan>
              {key === 'genres' ? (
                <p>
                  Please respect the following structure for genres : 'a, b, c'
                </p>
              ) : null}
              <FormInput
                type={GameStructure[key].type}
                value={newGame[key]}
                onChange={({ target }) =>
                  setNewGame({ ...newGame, [key]: target.value })
                }
              />
            </FormLabel>
          )
        })}
      <FormLabel>
        <FormSpan>Release Date</FormSpan>
        <p>Please respect the following structure for genres : 'mm/dd/yyyy'</p>
        <FormInput
          type="string"
          value={newGame.releaseDate}
          onChange={({ target }) =>
            setNewGame({ ...newGame, releaseDate: target.value })
          }
        />
      </FormLabel>
      <FormLabel>
        <FormSpan>Hero image</FormSpan>
        <FormInput
          type="file"
          name="heroImage"
          onChange={({ target }) => setSelectedFile(target.files[0])}
        />
      </FormLabel>
      <FormLabel>
        <FormSpan>Thumb image</FormSpan>
        <p>If not defined the hero image will be used</p>
        <FormInput
          type="file"
          name="thumbImage"
          onChange={({ target }) => setSelectedFileThumb(target.files[0])}
        />
      </FormLabel>
      {apiResponse ? (
        <SucessMessage>{apiResponse.message}</SucessMessage>
      ) : null}
      <FormButton type="button" onClick={() => sendAdd()}>
        Add
      </FormButton>
    </FormContainer>
  )
}
export default AddGameForm
