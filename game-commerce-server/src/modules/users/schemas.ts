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

export const userSchema = new mongoose.Schema({
  auth: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
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
      minlength: 2,
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2,
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

const User = mongoose.model<userInterface>('user', userSchema);

export default User;
