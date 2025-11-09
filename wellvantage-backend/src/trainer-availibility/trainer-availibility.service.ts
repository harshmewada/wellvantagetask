import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { TrainerAvailibilty } from './entitites/trainer-availibility.entity';
import { Repository } from 'typeorm';
import { AddScheduleDto } from './dto/add-schedule.dto';

@Injectable()
export class TrainerAvailibilityService {
  constructor(
    private readonly config: ConfigService,
    @InjectRepository(TrainerAvailibilty)
    private availibility: Repository<TrainerAvailibilty>,
  ) {}

  async getSchedule(date: Date) {
    return await this.availibility.find({ where: { date } });
  }

  async addSchedule(shceduleData: AddScheduleDto) {
    return await this.availibility.save(shceduleData);
  }
}
