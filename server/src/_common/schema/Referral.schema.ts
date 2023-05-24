import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReferralDocument = HydratedDocument<Referral>;

@Schema()
export class Referral {

  @Prop({required:true})
  Account: string;

  @Prop({required:true})
  ReferralCode: string;

  @Prop({required:true})
  Refers: number;
  
  @Prop({required:true})
  Gems: number;
}

export const ReferralSchema = SchemaFactory.createForClass(Referral);