// models/User.ts
import mongoose, { Schema, Document, Model } from 'mongoose';
export interface IBlogs extends Document{

    title:string;
    short_descriptio:string;
    cover_image:string;
    description:string;
}

const Blogsschema: Schema = new Schema({

});

const Blogs: Model<IBlogs> =
  mongoose.models.User || mongoose.model<IBlogs>('Blogs', Blogsschema);

export {Blogs}