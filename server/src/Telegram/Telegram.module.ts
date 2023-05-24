import { Module } from '@nestjs/common';
import { TelegramController } from './Telegram.controller';
import { TelegramService } from './Telegram.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Telegram, TelegramSchema} from '../_common/schema/Telegram.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Telegram.name, schema: TelegramSchema }])],
  controllers: [TelegramController],
  providers: [TelegramService],
})
export class TelegramModule {}
