import { Module } from '@nestjs/common';
import { TrainerAvailalibilityController } from './trainer-availibility.controller';
import { TrainerAvailibilityService } from './trainer-availibility.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainerAvailibilty } from './entitites/trainer-availibility.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TrainerAvailibilty])],
  controllers: [TrainerAvailalibilityController],
  providers: [TrainerAvailibilityService],
})
export class TrainerAvailibilityModule {}
