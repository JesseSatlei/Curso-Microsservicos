import { IsNotEmpty, IsArray, ArrayMinSize, ArrayMaxSize, IsDateString } from 'class-validator';
import { Player } from "src/players/interfaces/player.interface";

export class CreateChallengerDto {
    @IsNotEmpty()
    @IsDateString()
    dateTimeChallenge: Date;
  
    @IsNotEmpty()
    requester: Player;
  
    @IsArray()
    @ArrayMinSize(2)
    @ArrayMaxSize(2)
    players: Array<Player>
  
}