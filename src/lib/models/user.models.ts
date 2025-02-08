import mongoose, { Schema, Document, Model } from 'mongoose';

// Enum for User Roles
enum UserRole {
  INDIVIDUAL = 'individual',
  ORGANIZATION = 'organization',
}

// Interface for User Document
export interface IUser extends Document {
  clerkId: string;
  name: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  learningTrackId: mongoose.Types.ObjectId;
  likedBlogs: mongoose.Types.ObjectId[];
  savedBlogs: mongoose.Types.ObjectId[];
  notifications: mongoose.Types.ObjectId[];
  createdBlogs: mongoose.Types.ObjectId[];
  draftedBlogs: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

// User Schema
const UserSchema: Schema = new Schema(
  {
    clerkId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    userName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
    learningTrackId: { type: Schema.Types.ObjectId, ref: 'LearningTrack' },
    likedBlogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
    savedBlogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
    notifications: [{ type: Schema.Types.ObjectId, ref: 'Notification' }],
    createdBlogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
    draftedBlogs: [{ type: Schema.Types.ObjectId, ref: 'Blog' }],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export { User, UserRole };
