import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema(
  {
    avatar: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  profile: {
    type: [ProfileSchema],
    default: [],
  },
  tag: {
    type: [String],
    default: [],
  },
  password: {
    type: String,
    required: true,
  },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
