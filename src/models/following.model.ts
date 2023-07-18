import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './users.model';

export interface IFollowing extends Document {
  user_id: IUser['_id'];
  followers_id: IUser['_id'][];
  following_id: IUser['_id'][];
}

const followingSchema: Schema = new Schema({
  user_id: {
    type: String,
    required: true,
  },
  followers_id: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  following_id: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
});

const Following = mongoose.model<IFollowing>('Following', followingSchema);

export default Following;
