import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class PlayersValidationParameter implements PipeTransform {
   
    transform(value: any, metadata: ArgumentMetadata) {
    
        if (!value) {
            throw new BadRequestException(`Value ${metadata.data} not found`);
        }

        return value;
    }

}