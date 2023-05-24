import {IsNotEmpty} from 'class-validator';

export class TelegramDTO{
    @IsNotEmpty()
    Session: string;
    @IsNotEmpty()
    ChannelId:string;
    @IsNotEmpty()
    UserId:string;
}
