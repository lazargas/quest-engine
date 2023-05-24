import { Controller, Patch,Body,Param } from '@nestjs/common';
import {RewardService} from './Reward.service'
import {RewardDTO} from './dtos/Reward.dto'

@Controller('rewards')
export class RewardController {
  constructor(private readonly RewardService: RewardService) {}
   
  @Patch(':id')
  async addGems(
    @Body() rewardDTO: RewardDTO,
    @Param('id') RewardId: string,
  ): Promise<any> {
    const UpdatedReferral = await this.RewardService.updateGems(
      rewardDTO.Gems,
      rewardDTO.Refers,
      RewardId,
      rewardDTO.Account,
    );
    return null;
  }

  


}