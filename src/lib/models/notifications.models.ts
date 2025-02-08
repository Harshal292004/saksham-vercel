// models/User.ts
import mongoose, { Schema, Document, Model } from 'mongoose';
export interface INotifications  extends Document{
    title:string;
    short_descriptio:string;
    cover_image:string;
    description:string;
}

const Notificationsschema: Schema = new Schema({

});

const Notifications: Model<INotifications> =
  mongoose.models.User || mongoose.model<INotifications>('Notifications', Notificationsschema);

  export {Notifications}