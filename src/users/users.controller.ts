import { Body, Controller, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { LoginResponse, ServiceResponse, UserForgotPassword, UserLogin, UserRefreshToken, UserRegister, UserResetPassword } from './users.types';

@Controller('users')
export class UsersController {
  private readonly microserviceUrl = this.configService.get<string>('MICROSERVICE_URL');

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) { }

  @Post('register')
  async register(@Body() payload: UserRegister) {
    try {
      const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/register`, payload).toPromise();
      const response: ServiceResponse<string> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    } catch (error) {
      const response: ServiceResponse<string> = {
        error: (error as any).message,
        success: false,
      };
      return response;
    }
  }

  @Post('login')
  async login(@Body() payload: UserLogin) {
    try {
      const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/login`, payload).toPromise();
      const response: ServiceResponse<LoginResponse> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    } catch (error) {
      const response: ServiceResponse<LoginResponse> = {
        error: (error as any).message,
        success: false,
      };
      return response;
    }
  }

  @Post('refresh-token')
  async refreshToken(@Body() payload: UserRefreshToken) {
    try {
      const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/refresh-token`, payload).toPromise();
      const response: ServiceResponse<LoginResponse> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    } catch (error) {
      const response: ServiceResponse<LoginResponse> = {
        error: (error as any).message,
        success: false,
      };
      return response;
    }
  }

  @Post('forgot-password')
  async forgotPassword(@Body() payload: UserForgotPassword) {
    try {
      const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/forgot-password`, payload).toPromise();
      const response: ServiceResponse<string> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    } catch (error) {
      const response: ServiceResponse<string> = {
        error: (error as any).message,
        success: false,
      };
      return response;
    }
  }

  @Post('reset-password')
  async resetPassword(@Body() payload: UserResetPassword) {
    try {
      const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/reset-password`, payload).toPromise();
      const response: ServiceResponse<string> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    } catch (error) {
      const response: ServiceResponse<string> = {
        error: (error as any).message,
        success: false,
      };
      return response;
    }
  }
}
