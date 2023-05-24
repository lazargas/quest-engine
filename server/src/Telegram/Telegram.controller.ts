import { Controller, Body, Post, Get, Param,Patch } from '@nestjs/common';
import { TelegramService } from './Telegram.service';
import { TelegramDTO } from './dtos/Telegram.dto';

@Controller('telegram')
export class TelegramController {
  constructor(private readonly TelegramService: TelegramService) {}

  @Get('/login')
  async loginMembership(): Promise<any> {
    const res = this.TelegramService.login();
    console.log(res);
    return res;
  }
  
  @Post()
  async getParticipant(@Body() telegramDTO:TelegramDTO ):Promise<any>{
     const gotParticipant = await this.TelegramService.run(telegramDTO.Session,telegramDTO.ChannelId,telegramDTO.UserId);
     return gotParticipant;
  }



}
