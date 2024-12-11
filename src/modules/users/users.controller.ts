import { Body, Controller, Post } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { LoginResponse, ServiceResponse, UserForgotPassword, UserLogin, UserRefreshToken, UserRegister, UserResetPassword } from './users.types';

@Controller('users')
export class UsersController {
  private readonly microserviceUrl = 'http://ms-auth-service:8080/auth';

  constructor(
    private readonly httpService: HttpService,
  ) { }

  @Post('register')
  async register(@Body() payload: UserRegister) {
    const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/register`, payload).toPromise();
    if (axiosResponse?.data.success) {
      const response: ServiceResponse<string> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    }
    const response: ServiceResponse<string> = {
      error: axiosResponse?.data.error,
      success: false,
    };
    return response;
  }

  @Post('login')
  async login(@Body() payload: UserLogin) {
    const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/login`, payload).toPromise();
    if (axiosResponse?.data.success) {
      const response: ServiceResponse<LoginResponse> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    }
    const response: ServiceResponse<string> = {
      error: axiosResponse?.data.error,
      success: false,
    };
    return response;
  }

  @Post('refresh-token')
  async refreshToken(@Body() payload: UserRefreshToken) {
    const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/refresh-token`, payload).toPromise();
    if (axiosResponse?.data.success) {
      const response: ServiceResponse<LoginResponse> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    }
    const response: ServiceResponse<string> = {
      error: axiosResponse?.data.error,
      success: false,
    };
    return response;
  }

  @Post('forgot-password')
  async forgotPassword(@Body() payload: UserForgotPassword) {
    const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/forgot-password`, payload).toPromise();
    if (axiosResponse?.data.success) {
      const response: ServiceResponse<string> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    }
    const response: ServiceResponse<string> = {
      error: axiosResponse?.data.error,
      success: false,
    };
    return response;
  }

  @Post('reset-password')
  async resetPassword(@Body() payload: UserResetPassword) {
    const axiosResponse = await this.httpService.post(`${this.microserviceUrl}/reset-password`, payload).toPromise();
    if (axiosResponse?.data.success) {
      const response: ServiceResponse<string> = {
        data: axiosResponse?.data.data,
        success: true,
      };
      return response;
    }
    const response: ServiceResponse<string> = {
      error: axiosResponse?.data.error,
      success: false,
    };
    return response;
  }
}
