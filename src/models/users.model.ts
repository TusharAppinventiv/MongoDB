import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  Bio : string;
  createdAt : string;
  updatedAt : string;
  followers : Number;
  Following : Number;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  Bio : {type : String},
  createdAt : {type : String},
  updatedAt : {type : String},
  followers : {type : Number},
  following : {type : Number},
});

export default mongoose.model<IUser>('users', UserSchema);
