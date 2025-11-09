import { ApiProperty } from '@nestjs/swagger';
import { BOOKINGSTATUS } from '../enums/trainer-availibilty.enums';
import { IsEnum } from 'class-validator';

export class AddScheduleDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  startTime: string;

  @ApiProperty()
  endTime: string;

  @IsEnum(BOOKINGSTATUS)
  @ApiProperty({ enum: BOOKINGSTATUS, type: String })
  status: BOOKINGSTATUS;
}
