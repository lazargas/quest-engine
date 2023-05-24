import { Module } from '@nestjs/common';
import { ReferralController } from './Referral.controller';
import { ReferralService } from './Referral.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Referral, ReferralSchema} from '../_common/schema/Referral.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Referral.name, schema: ReferralSchema }])],
  controllers: [ReferralController],
  providers: [ReferralService],
})
export class ReferralModule {}
