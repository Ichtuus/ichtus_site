import { Schema, model } from "mongoose";
import { UserSchema } from "../../types/user";

const userSchema = new Schema<UserSchema>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  firstName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  lastName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    length: [8, "Password must be at least 8 characters long"],
  },
});

export default model<UserSchema>("User", userSchema);
