import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { allowedNodeEnvironmentFlags } from 'process';

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));
  await app.listen(3000);

}
bootstrap();
