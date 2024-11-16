import { Module } from '@nestjs/common';
import { NotificationsController } from './notifications.controller';
import { CeleryService } from './celery.service';

@Module({
  controllers: [NotificationsController],
  providers: [CeleryService],
  exports: [CeleryService], 
})
export class NotificationsModule {}