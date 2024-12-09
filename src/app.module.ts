import { Module } from '@nestjs/common';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { UsersModule } from './modules/users/users.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [
    ReservationsModule, 
    UsersModule, 
    NotificationsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
