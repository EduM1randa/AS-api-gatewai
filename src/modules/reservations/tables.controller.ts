import {
  Body,
  Controller,
  Inject,
  OnModuleInit,
  Post,
  Get,
  Param,
  Put,
} from '@nestjs/common';
import { ClientGrpcProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

import {
  TABLE_SERVICE_NAME,
  TableServiceClient,
} from './protos/protos/reservation';

import type {
  CreateTableRequest,
  UpdateTableRequest,
  GetAvailableTablesRequest,
  Response,
  Tables,
  Empty,
} from './protos/protos/reservation';

@Controller('tables')
export class TablesController implements OnModuleInit {
  private tablesService!: TableServiceClient;

  constructor(
    @Inject('TablesServiceClient')
    private readonly tablesServiceClient: ClientGrpcProxy,
  ) {}

  onModuleInit() {
    this.tablesService =
      this.tablesServiceClient.getService<TableServiceClient>(
        TABLE_SERVICE_NAME,
      );
  }

  @Post()
  async createTable(
    @Body() createTableRequest: CreateTableRequest,
  ): Promise<Response> {
    return firstValueFrom(this.tablesService.createTable(createTableRequest));
  }

  @Get()
  async getTables(): Promise<Tables> {
    const request: Empty = {};
    return firstValueFrom(this.tablesService.getTables(request));
  }

  @Put(':id')
  async updateTable(
    @Param('id') id: string,
    @Body() request: UpdateTableRequest,
  ): Promise<Response> {
    request.id = id;
    return firstValueFrom(this.tablesService.updateTable(request));
  }

  @Get('available/:reservationDate')
  async getAvailableTables(
    @Param('reservationDate') reservationDate: string,
  ): Promise<Tables> {
    const request: GetAvailableTablesRequest = { reservationDate };
    return firstValueFrom(this.tablesService.getAvailableTables(request));
  }
}