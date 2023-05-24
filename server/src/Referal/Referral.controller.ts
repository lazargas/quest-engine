import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
} from '@nestjs/common/decorators';
import { ReferralService } from './Referral.service';
import { ReferralDTO } from './dtos/Referral.dto';

@Controller('referrals')
export class ReferralController {
  constructor(private readonly ReferralService: ReferralService) {}

  @Get()
  async getLink(): Promise<any> {
    const generated = await this.ReferralService.getLink();
    return generated;
  }

  @Post()
  async addReferral(@Body() referralDTO: ReferralDTO): Promise<any> {
    const generateReferral = await this.ReferralService.addReferral(
      referralDTO.Account,
    );
    console.log(generateReferral);
    return { id: generateReferral };
  }

  @Patch(':id')
  async addGems(
    @Body() referralDTO: ReferralDTO,
    @Param('id') ReferralId: string,
  ): Promise<any> {
    const UpdatedReferral = await this.ReferralService.updateReferral(
      referralDTO.Gems,
      referralDTO.Refers,
      ReferralId,
      referralDTO.Account,
    );
    return null;
  }
}
