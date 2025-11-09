import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { TrainerAvailibilityService } from './trainer-availibility.service';
import { ApiTags } from '@nestjs/swagger';
import { AddScheduleDto } from './dto/add-schedule.dto';

@Controller()
@ApiTags('Trainer Availibility')
export class TrainerAvailalibilityController {
  constructor(
    private readonly trainerAvailibilityService: TrainerAvailibilityService,
  ) {}

  @Get('schedule')
  async getSchedule(@Query('date') date: Date) {
    return await this.trainerAvailibilityService.getSchedule(date);
  }

  @Post('add-schedule')
  async addSchedule(@Body() scheduleData: AddScheduleDto) {
    return await this.trainerAvailibilityService.addSchedule(scheduleData);
  }
}
