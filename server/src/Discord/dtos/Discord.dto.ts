import { IsNotEmpty } from 'class-validator';

export class DiscordDTO {
    @IsNotEmpty()
    GuildId: string;
    @IsNotEmpty()
    UserId: string;
}

