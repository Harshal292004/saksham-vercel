import mongoose, { Schema, Document, Model } from "mongoose";
import { unique } from "next/dist/build/utils";

export interface IUser extends Document {
  email_address: string;
  username: string;
  first_name: string;
}

const UserSchema: Schema = new Schema(
  {
    username: { type: String, required: true,unique:true},
    email_address: { type: String},
    first_name: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model overwrite during hot reload
export const User: Model<IUser> = (mongoose.models.User as Model<IUser>) || mongoose.model<IUser>("User", UserSchema);