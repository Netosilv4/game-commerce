import mongoose from '../../connection';

export interface gameInterface extends mongoose.Document {
  name: string;
  genres: string[];
  price: number;
  publisher: string;
  description: string;
  releaseDate: Date;
  rate: number;
  heroImage: string;
  numberOfPlayers: number;
  multiplayerPlayers: number;
  quantity: number;
}

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  heroImage: {
    type: String,
    required: true,
  },
  numberOfPlayers: {
    type: Number,
    required: true,
  },
  multiplayerPlayers: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const gameModel = mongoose.model<gameInterface>('Game', gameSchema);

const Game = mongoose.model<gameInterface>('User', gameSchema);

export default Game;
