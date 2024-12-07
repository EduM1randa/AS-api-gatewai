import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { clientProxyReservations } from 'src/common/proxy/client-proxy';
import { ClientGrpcProxy } from '@nestjs/microservices';

@Module({
  controllers: [ReservationsController],
  providers: [
    {
      provide: 'ReservationsServiceClient',
      useFactory: (): ClientGrpcProxy => {
        return clientProxyReservations();
      },
    }
  ],
  exports: [],
})
export class ReservationsModule {}