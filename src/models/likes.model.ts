import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './users.model';
import { IPost } from './posts.model';

export interface ILike extends Document {
  user: IUser['_id'];
  post: IPost['_id'];
}

const likeSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
});

const Like = mongoose.model<ILike>('Like', likeSchema);

export default Like;
