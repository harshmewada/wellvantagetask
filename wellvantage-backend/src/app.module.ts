import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from 'config/configuration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvironmentVariables } from 'config/environment.interface';
import { TrainerAvailibilityModule } from './trainer-availibility/trainer-availibility.module';
import { TrainerAvailibilty } from './trainer-availibility/entitites/trainer-availibility.entity';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (
        configService: ConfigService<EnvironmentVariables>,
      ) => ({
        type: 'postgres',
        host: configService.get<string>('db.postgress.host', { infer: true }),
        port: configService.get<number>('db.postgress.port', { infer: true }),
        username: 'postgres',
        database: configService.get<string>('db.postgress.database', {
          infer: true,
        }),
        synchronize: true,
        entities: [TrainerAvailibilty],
      }),
      inject: [ConfigService],
    }),
    TrainerAvailibilityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
