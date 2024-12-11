import {
  ClientGrpcProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import * as dotenv from 'dotenv';

dotenv.config();

import { RESERVATION_PACKAGE_NAME } from '../../modules/reservations/protos/protos/reservation';

export const clientProxyReservations = (): ClientGrpcProxy => {
  return ClientProxyFactory.create({
    transport: Transport.GRPC,
    options: {
      url: 'my-go-service:9000',
      package: RESERVATION_PACKAGE_NAME,
      protoPath: 'protos/protos/reservation.proto',
    },
  })
}