import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './users.model';
import { IPost } from './posts.model';

export interface IComment extends Document {
  user: IUser['_id'];
  post: IPost['_id'];
  text: string;
  createdAt: Date;
}

const commentSchema: Schema = new Schema({
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
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comment = mongoose.model<IComment>('Comment', commentSchema);

export default Comment;
