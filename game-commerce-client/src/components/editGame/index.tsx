import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import useGames from '../../hooks/useGames'
import { List, ListItem } from '../../styles/globalComponents/Lists'
import EditGameForm from '../forms/EditGameForm'

const EditGame = (): JSX.Element => {
  const { user } = useContext(UserContext)
  const {
    games,
    setSelectedGame,
    selectedGame,
    sendEdit,
    apiResponse,
    selectedFile,
    setSelectedFile,
    deleteGame,
    setSelectedFileThumb
  } = useGames(user)

  if (!games) return <h1>Loading...</h1>

  if (selectedGame) {
    return (
      <EditGameForm
        game={selectedGame}
        setSelectedGame={setSelectedGame}
        sendEdit={sendEdit}
        apiResponse={apiResponse}
        selectedFile={selectedFile}
        setSelectedFile={setSelectedFile}
        deleteGame={deleteGame}
        setSelectedFileThumb={setSelectedFileThumb}
      />
    )
  }

  return (
    <div>
      <h1>Choose a game to edit</h1>
      <List>
        {games.map(game => (
          <ListItem onClick={() => setSelectedGame(game)} key={game._id}>
            {game.name}
          </ListItem>
        ))}
      </List>
    </div>
  )
}

export default EditGame
