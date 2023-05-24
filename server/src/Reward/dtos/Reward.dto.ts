import { IsNotEmpty } from 'class-validator';

export class RewardDTO {
    @IsNotEmpty()
    Account: string;
    @IsNotEmpty()
    ReferralCode: string;
    @IsNotEmpty()
    Refers: number;
    @IsNotEmpty()
    Gems: number;
}

