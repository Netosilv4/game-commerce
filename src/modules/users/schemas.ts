import mongoose from '../../connection';

export interface userInterface extends mongoose.Document {
    auth: {
        email: string;
        password: string;
        role: string;
    };
    profile: {
        firstName: string;
        lastName: string;
        avatar: string;
    }
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    }
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new mongoose.Schema({
  auth: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: 'user',
      enum: ['user', 'admin'],
    },
  },
  profile: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: false,
    },
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zip: {
      type: Number,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model<userInterface>('User', userSchema);

export default User;
