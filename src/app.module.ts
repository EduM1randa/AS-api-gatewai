import { Module } from '@nestjs/common';
import { NotificationsModule } from './notifications/notifications.module';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    NotificationsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
