import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService implements OnApplicationBootstrap {
  constructor(private readonly config: ConfigService) {}

  onApplicationBootstrap() {
    console.log('the rich', this.config.get('http.port'));
  }
  getHello(): string {
    return 'Hello World!';
  }
}
