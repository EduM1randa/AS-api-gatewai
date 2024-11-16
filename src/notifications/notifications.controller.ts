import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CeleryService } from './celery.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly celeryService: CeleryService) {}

  @Post('send')
  async sendNotification(
    @Body('userId') userId: string,
    @Body('notificationType') notificationType: string,
    @Body('message') message: string
  ) {
    return await this.celeryService.sendNotification(userId, notificationType, message);
  }

  @Post('mark-as-read')
  async markAsRead(@Body('userId') userId: string) {
    return await this.celeryService.markAsRead(userId);
  }

  @Get('unread/:userId')
  async getUnreadNotifications(@Param('userId') userId: string) {
    return await this.celeryService.getUnreadNotifications(userId);
  }
}