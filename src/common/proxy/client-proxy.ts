import {
  ClientGrpcProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();

import { RESERVATION_PACKAGE_NAME } from '../../modules/reservations/protos/reservation.pb';

export const clientProxyReservations = (): ClientGrpcProxy => {
  return ClientProxyFactory.create({
    transport: Transport.GRPC,
    options: {
      url: ,
      package: RESERVATION_PACKAGE_NAME,
      protoPath: ,
    },
  })
}