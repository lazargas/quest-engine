import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Discord1Document = HydratedDocument<Discord1>;

@Schema()
export class Discord1 {

  @Prop({required:true})
  GuildId: string;

  @Prop({required:true})
  UserId: string;

  @Prop({required:true})
  Username: number;
  
  @Prop({required:true})
  JoinedAt: number;
}

export const Discord1Schema = SchemaFactory.createForClass(Discord1);