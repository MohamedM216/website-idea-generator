import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Idea extends Document {
  @Prop({ required: true })
  prompt: string;

  @Prop({ type: [String], required: true })
  sections: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const IdeaSchema = SchemaFactory.createForClass(Idea);