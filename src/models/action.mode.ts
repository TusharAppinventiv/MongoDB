import mongoose, { Schema, Document } from 'mongoose';
import { IUser } from './users.model';
import { IComment } from './comment.model';
import { ILike } from './likes.model';

export interface IAction extends Document {
  userId: IUser['_id'];
  likeId?: ILike['_id'];
  commentId?: IComment['_id'];
  createdAt: Date;
  updatedAt: Date;
}

const actionSchema: Schema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  likeId: {
    type: Schema.Types.ObjectId,
    ref: 'Like',
  },
  commentId: {
    type: Schema.Types.ObjectId,
    ref: 'Comment',
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

const Action = mongoose.model<IAction>('Action', actionSchema);

export default Action;
