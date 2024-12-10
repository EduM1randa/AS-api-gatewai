import { Body, Controller, Post, BadRequestException, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

type RegisterUserDto = {
  Name: string;
  LastName: string;
  Email: string;
  Password: string;
}

@Controller('users')
export class UsersController {
  constructor(@Inject('USERS_SERVICE') private readonly client: ClientProxy) {}

  @Post('register')
  async register(@Body() userData: RegisterUserDto) {
    try {
      return await lastValueFrom(this.client.send({ cmd: 'register_user' }, userData));
    } catch (error) {
      throw new BadRequestException('Failed to register user.');
    }
  }
}