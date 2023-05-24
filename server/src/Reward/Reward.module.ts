import { Module } from '@nestjs/common';
import { RewardController } from './Reward.controller';
import { RewardService } from './Reward.service';
import { MongooseModule } from '@nestjs/mongoose';
import {Referral, ReferralSchema} from '../_common/schema/Referral.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Referral.name, schema: ReferralSchema }])],
  controllers: [RewardController],
  providers: [RewardService],
})
export class RewardModule {}
