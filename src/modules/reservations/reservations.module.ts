import { Module } from '@nestjs/common';
import { ReservationsController } from './reservations.controller';
import { clientProxyReservations } from 'src/common/proxy/client-proxy';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { TablesController } from './tables.controller';

@Module({
  controllers: [
    ReservationsController,
    TablesController,
  ],
  providers: [
    {
      provide: 'ReservationsServiceClient',
      useFactory: (): ClientGrpcProxy => {
        return clientProxyReservations();
      },
    },
    {
      provide: 'TablesServiceClient',
      useFactory: (): ClientGrpcProxy => {
        return clientProxyReservations();
      },
    }
  ],
  exports: [],
})
export class ReservationsModule {}