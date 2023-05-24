import { Controller, Body, Post } from '@nestjs/common';
import { DiscordService } from './Discord.service';
import { DiscordDTO } from './dtos/Discord.dto';

@Controller('discord')
export class DiscordController {
  constructor(private readonly DiscordService: DiscordService) {}

  @Post()
  async checkUserJoin(@Body() DiscordDTO: DiscordDTO): Promise<any> {
    const generated = await this.DiscordService.checkUserJoin(
      DiscordDTO.GuildId,
      DiscordDTO.UserId,
    );
    return { data: generated };
  }
}
