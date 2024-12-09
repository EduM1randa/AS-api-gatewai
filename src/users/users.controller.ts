import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';

type RegisterUserDto = {
  Name: string;
  LastName: string;
  Email: string;
  Password: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() userData: RegisterUserDto) {
    try {
      console.log('Received registration request:', userData);
      const confirmation = await this.usersService.registerUser(userData);
      console.log('Registration confirmation:', confirmation);
      return confirmation;
    } catch (error) {
      console.error('Error during registration:', error);
      throw new BadRequestException('Failed to register user.');
    }
  }
}