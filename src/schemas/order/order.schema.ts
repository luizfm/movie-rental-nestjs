import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Movie } from '../movie/movie.schema';
import { User } from '../user/user.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }] })
  movies: Movie[];

  @Prop()
  expected_return_date: Date;

  @Prop()
  total: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
