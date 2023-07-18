import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './users.model';

export interface IPost extends Document {
  user: IUser['_id'];
  post: IPost['_id'];
  createdAt: Date;
  updatedAt: Date;
}

const postschema: Schema = new Schema({
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
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model<IPost>('Post', postschema);

export default Post;

