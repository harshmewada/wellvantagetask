import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TrainerAvailibilty } from './entitites/trainer-availibility.entity';
import { BOOKINGSTATUS } from './enums/trainer-availibilty.enums';
import { TrainerAvailibilityModule } from './trainer-availibility.module';

describe('Trainer Availibilty (e2e) - TypeORM mock', () => {
  let app: INestApplication;

  const mockEntities: Partial<TrainerAvailibilty>[] = [
    {
      id: 1,
      trainerId: 'tr-123',
      date: new Date('2025-11-08'),
      startTime: '09:00:00',
      endTime: '10:00:00',
      status: BOOKINGSTATUS.OPEN,
    },
    {
      id: 2,
      trainerId: '23',
      date: new Date('2025-11-08'),
      startTime: '11:00:00',
      endTime: '12:00:00',
      status: BOOKINGSTATUS.OPEN,
    },
  ];

  const mockRepo: Partial<
    Record<keyof Repository<TrainerAvailibilty>, jest.Mock>
  > = {
    find: jest.fn().mockResolvedValue(mockEntities),
  };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TrainerAvailibilityModule],
    })
      .overrideProvider(getRepositoryToken(TrainerAvailibilty))
      .useValue(mockRepo)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('/GET availability (returns mocked TypeORM rows)', async () => {
    const res = await request(app.getHttpServer()).get('/schedule').expect(200);

    expect(res.body).toEqual({ data: mockEntities });

    expect(mockRepo.find).toHaveBeenCalled();
  });

  afterAll(async () => {
    await app.close();
  });
});
