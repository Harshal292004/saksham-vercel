import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
  clerk_id: string;
  email_address: string;
  username: string;
  first_name: string;
  learning_track: mongoose.Schema.Types.ObjectId[];
  liked_blogs: mongoose.Schema.Types.ObjectId[];
  saved_blogs: mongoose.Schema.Types.ObjectId[];
  notifications: mongoose.Schema.Types.ObjectId[];
}

const UserSchema: Schema = new Schema(
  {
    clerk_id: { type: String, required: true, unique: true },
    email_address: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    learning_track: [{ type: mongoose.Schema.Types.ObjectId, ref: "LearningTrack" }],
    liked_blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    saved_blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Blog" }],
    notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: "Notification" }]
  },
  { timestamps: true }
);

// Prevent model overwrite during hot reload
export const User: Model<IUser> = (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>("User", UserSchema);