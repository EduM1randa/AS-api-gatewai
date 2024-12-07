import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';

import { 
  CreateReservationRequest,
  RESERVATION_SERVICE_NAME,
  ReservationServiceClient,
  Response
} from './protos/reservation.pb';
import { firstValueFrom } from 'rxjs';

@Controller('reservations')
export class ReservationsController {
  constructor(
    @Inject('ReservationsServiceClient')
    private readonly reservationsServiceClient: ClientGrpcProxy,
  ) {}
  private reservationsService: ReservationServiceClient;

  onModuleInit() {
    this.reservationsService =
      this.reservationsServiceClient.getService<ReservationServiceClient>(
        RESERVATION_SERVICE_NAME,
      );
  }

  @Post()
  async createReservation(
    @Body() createReservationRequest: CreateReservationRequest,
  ): Promise<Response> {
    return firstValueFrom(this.reservationsService.createReservation(createReservationRequest));
  }
  
}
