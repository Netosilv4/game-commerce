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
  thumb: string;
  numberOfPlayers: number;
  multiplayerPlayers: number;
  quantity: number;
  featured: boolean
}

export const gameSchema = new mongoose.Schema({
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
  thumb: {
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
  featured: {
    type: Boolean,
    required: true,
  },
});

const Game = mongoose.model<gameInterface>('game', gameSchema);

export default Game;
