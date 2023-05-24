import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TelegramDocument = HydratedDocument<Telegram>;

@Schema()
export class Telegram {
  @Prop({ required: true })
  UserId: string;

  @Prop({ required: true })
  CheckId: string;

  @Prop({ required: true })
  Username: string;
}

export const TelegramSchema = SchemaFactory.createForClass(Telegram);
