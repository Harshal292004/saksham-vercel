import mongoose, { Schema, Document, Model } from "mongoose";

export enum UserRole {
  INDIVIDUAL = "individual",
  ORGANIZATION = "organization",
}

export interface IUser extends Document {
  clerkId: string;
  email_addresses: string;
  username: string;
  first_name: string;
  role: UserRole;
}

const UserSchema: Schema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite during hot reload
export const User: Model<IUser> = (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>("User", UserSchema);