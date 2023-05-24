import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Discord1, Discord1Document } from '../_common/schema/Discord.schema';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class DiscordService {
  constructor(
    @InjectModel(Discord1.name) private Discord1Model: Model<Discord1Document>,
  ) {}

  

  async checkUserJoin(guildId: string, userId: string) {
    try
    {
        
  }catch(error){
     console.log("error in discord", error.message);
  }
}

}
