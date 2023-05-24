import { Module } from '@nestjs/common';
import { DiscordController } from './Discord.controller';
import { DiscordService } from './Discord.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Discord1, Discord1Schema} from '../_common/schema/Discord.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Discord1.name, schema: Discord1Schema }])],
  controllers: [DiscordController],
  providers: [DiscordService],
})
export class DiscordModule {}
