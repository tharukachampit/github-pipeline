import { NestFactory } from '@nestjs/core';
import { Console } from 'console';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('CICD');
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
