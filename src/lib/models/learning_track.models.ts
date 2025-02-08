// models/User.ts
import mongoose, { Schema, Document, Model } from 'mongoose';
interface IModules{
  module_number:number;
  module_content:string;
}
export interface ILearningTrack extends Document {
  resources:Array<string>;
  modules:Array<IModules>;
  level:string /*newbie,intermidiate,Learning*/
  type:string /*Customized and  Experienvce Level*/
}

const LearningTrackschema: Schema = new Schema({
  
});

const LearningTrack: Model<ILearningTrack> =
  mongoose.models.User || mongoose.model<ILearningTrack>('LearningTrack', LearningTrackschema);

export {LearningTrack}