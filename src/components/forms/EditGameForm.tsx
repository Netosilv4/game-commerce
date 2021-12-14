import { GameI } from '../../interfacesAndTypes/game'
import React from 'react'
import {
  ErrorMessage,
  FormButton,
  FormContainer,
  FormInput,
  FormLabel,
  FormSpan,
  SucessMessage,
  TextBox
} from '../../styles/globalComponents/Forms'
import { ApiResponse } from '../../hooks/useGames'

interface EditGameFormProps {
  game: GameI
  setSelectedGame: (game: GameI) => void
  sendEdit: () => void
  apiResponse: ApiResponse
  selectedFile: File
  setSelectedFile: (file: File) => void
}

const EditGameForm: React.FC<EditGameFormProps> = ({
  game,
  setSelectedGame,
  sendEdit,
  apiResponse,
  setSelectedFile
}) => {
  if (!game) return null
  return (
    <FormContainer>
      <FormLabel>
        <FormSpan>Game Name</FormSpan>
        <FormInput
          type="text"
          value={game.name}
          onChange={e => {
            setSelectedGame({ ...game, name: e.target.value })
          }}
        />
      </FormLabel>
      <FormLabel>
        <FormSpan>Hero image</FormSpan>
        <FormInput
          type="file"
          name="file"
          onChange={({ target }) => setSelectedFile(target.files[0])}
        />
      </FormLabel>
      <FormLabel>
        <FormSpan>Game description</FormSpan>
        <TextBox
          value={game.description}
          onChange={e => {
            setSelectedGame({ ...game, description: e.target.value })
          }}
        />
      </FormLabel>
      <FormLabel>
        <FormSpan>Game Price</FormSpan>
        <FormInput
          type="number"
          value={game.price}
          onChange={e => {
            setSelectedGame({ ...game, price: +e.target.value })
          }}
        />
      </FormLabel>
      <FormLabel>
        <FormSpan>Game Rate</FormSpan>
        <FormInput
          type="number"
          value={game.rate}
          onChange={e => {
            setSelectedGame({ ...game, rate: +e.target.value })
          }}
        />
      </FormLabel>
      {apiResponse && apiResponse.code === 200 ? (
        <SucessMessage>{apiResponse.message}</SucessMessage>
      ) : null}
      {apiResponse && apiResponse.code !== 200 ? (
        <ErrorMessage>{apiResponse.message}</ErrorMessage>
      ) : null}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <FormButton type="button" onClick={() => setSelectedGame(undefined)}>
          voltar
        </FormButton>
        <FormButton
          style={{ backgroundColor: '#090' }}
          type="button"
          onClick={() => sendEdit()}
        >
          Salvar
        </FormButton>
      </div>
    </FormContainer>
  )
}
export default EditGameForm
