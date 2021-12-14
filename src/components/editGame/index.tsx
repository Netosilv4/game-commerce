import React from 'react'
import useGames from '../../hooks/useGames'
import { List, ListItem } from '../../styles/globalComponents/Lists'
import EditGameForm from '../forms/EditGameForm'

const EditGame = (): JSX.Element => {
  const {
    games,
    setSelectedGame,
    selectedGame,
    sendEdit,
    apiResponse,
    selectedFile,
    setSelectedFile
  } = useGames()

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
