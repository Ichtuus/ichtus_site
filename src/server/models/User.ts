import { Schema, model } from "mongoose";
import { UserSchema } from "../../types/user";

const userSchema = new Schema<UserSchema>({
  uuid: {
    type: Number,
    required: [true, "UUID is required."],
    index: {
      unique: true,
    },
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: [true, 'Email is required.'],
    validate: {
        validator: function (value: string) {
            return /^\S+@\S+\.\S+$/.test(value)
        },
        message: 'Invalid email.'
    },
    index: {
        unique: true
    }
},

  firstName: {
    type: String,
    required: [true, "First name is required."],
    trim: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z\s-]+$/.test(value);
      },
      message: "Invalid First Name",
    },
  },
  lastName: {
    type: String,
    required: [true, "First name is required."],
    trim: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z\s-]+$/.test(value);
      },
      message: "Invalid First Name",
    },
  },

  password: {
    type: String,
    required: true,
    length: [8, "Password must be at least 8 characters long"],
  },
});

export default model<UserSchema>("User", userSchema);
