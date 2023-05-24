import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Referral, ReferralDocument } from '../_common/schema/Referral.schema';
import { InjectModel } from '@nestjs/mongoose';



@Injectable()
export class RewardService {
  constructor(
    @InjectModel(Referral.name) private ReferralModel: Model<ReferralDocument>,
  ) {}
  
  async updateGems(gems:number,refers:number,rewardId:string,account:string):Promise<any>{
    const exist = await this.ReferralModel.findOne({rewardId});
    const newGems = exist.Gems+gems;
    const updateGems = await this.ReferralModel.updateOne({rewardId},{
        $set : {
            "Gems": newGems     
        }
    })
    return null;
  }
  

}



