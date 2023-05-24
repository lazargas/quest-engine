import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Model } from 'mongoose';
import { Referral, ReferralDocument } from '../_common/schema/Referral.schema';
import { InjectModel } from '@nestjs/mongoose';
import { ReferralDTO } from './dtos/Referral.dto';

@Injectable()
export class ReferralService {
  constructor(
    @InjectModel(Referral.name) private ReferralModel: Model<ReferralDocument>,
  ) {}
  
  
  
  async updateReferral(gems:number,refers:number,referralId:string,account:string):Promise<any>{
     const exist = await this.ReferralModel.findOne({referralId});
     const newGems = gems+exist.Gems;
     const newRefers = refers+1;
    const update = await this.ReferralModel.updateOne({ReferralCode:referralId},{
      $set: {
        "Refers":newRefers,
        "Gems":newGems
      }
    })
    return null;


  }



  async getLink(): Promise<any> {
    try
    {
      const exist = await this.ReferralModel.find();
      console.log(exist);
      const a = [];
      const gems = exist.map((e)=>{
          a.push({Account: e.Account, Gems: e.Gems });
      })
      return a.sort().reverse();
    }
    catch(error){
      console.log(error.message);
    }

  }

  async addReferral(Account: string): Promise<any> {
    try {
      let exist = await this.ReferralModel.findOne({ Account: Account });
      if (exist) {
        console.log('user already exists');
        return exist.ReferralCode;
      }

      const uuid = uuidv4().slice(0, 5).toUpperCase();
      const createdReferral = new this.ReferralModel({
        Account: Account,
        ReferralCode: uuid,
        Refers: 0,
        Gems:0
      });
      
      await createdReferral.save();
      return uuid;
    } catch (error) {
      console.log(error.message);
    }
  }
}
