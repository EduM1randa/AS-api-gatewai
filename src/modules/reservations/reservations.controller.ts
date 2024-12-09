import {
  Body,
  Controller,
  Inject,
  OnModuleInit,
  Post,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import {
  RESERVATION_SERVICE_NAME,
  ReservationServiceClient,
} from './protos/protos/reservation';

import type {
  CreateReservationRequest,
  DeleteReservationRequest,
  GetReservationByIDRequest,
  GetReservationsByUserIDRequest,
  GetReservationsByDateRequest,
  UpdateReservationRequest,
  Response,
  Reservation,
  Reservations,
} from './protos/protos/reservation';

@Controller('reservations')
export class ReservationsController implements OnModuleInit {
  private reservationsService!: ReservationServiceClient;

  constructor(
    @Inject('ReservationsServiceClient')
    private readonly reservationsServiceClient: ClientGrpcProxy,
  ) {}

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
    return firstValueFrom(
      this.reservationsService.createReservation(createReservationRequest),
    );
  }

  @Get(':id')
  async getReservationById(@Param('id') id: string): Promise<Reservation> {
    const request: GetReservationByIDRequest = { id };
    return firstValueFrom(this.reservationsService.getReservationById(request));
  }

  @Get('user/:userId')
  async getReservationsByUserId(
    @Param('userId') userId: string,
  ): Promise<Reservations> {
    const request: GetReservationsByUserIDRequest = { userId };
    return firstValueFrom(
      this.reservationsService.getReservationsByUserId(request),
    );
  }

  @Get('date/:reservationDate')
  async getReservationsByDate(
    @Param('reservationDate') reservationDate: string,
  ): Promise<Reservations> {
    const request: GetReservationsByDateRequest = { reservationDate };
    return firstValueFrom(
      this.reservationsService.getReservationsByDate(request),
    );
  }

  @Put(':id')
  async updateReservation(
    @Param('id') id: string,
    @Body() request: UpdateReservationRequest,
  ): Promise<Response> {
    request.id = id;
    return firstValueFrom(this.reservationsService.updateReservation(request));
  }

  @Delete(':id')
  async deleteReservation(@Param('id') id: string): Promise<Response> {
    const request: DeleteReservationRequest = { id };
    return firstValueFrom(this.reservationsService.deleteReservation(request));
  }
}
