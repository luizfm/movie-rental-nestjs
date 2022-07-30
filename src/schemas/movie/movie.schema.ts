import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomUUID } from 'crypto';
import { Document } from 'mongoose';

export type MovieDocument = Movie & Document;

@Schema()
export class Movie {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  genre: string;

  @Prop()
  timeDuration: number;

  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
