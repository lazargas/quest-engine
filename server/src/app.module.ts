import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReferralModule } from './Referal/Referral.module';
import { MongooseModule } from '@nestjs/mongoose';
import {RewardModule} from './Reward/Reward.module'
import { TelegramModule } from './Telegram/Telegram.module';
import { DiscordModule } from './Discord/Discord.module';

@Module({
  imports: [DiscordModule,TelegramModule,RewardModule,ReferralModule,MongooseModule.forRoot('mongodb+srv://akarsh:Jasperm0tu@cluster0.nolv2ja.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
