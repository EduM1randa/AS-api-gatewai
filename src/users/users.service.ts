import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService implements OnModuleInit {
    constructor(@Inject('USERS_SERVICE') private readonly client: ClientProxy) { }

    async onModuleInit() {
        await this.client.connect();
    }

    async registerUser(userData: any): Promise<any> {
        try {
            console.log('Sending message to microservice:', userData);
            const response = await firstValueFrom(this.client.send({ cmd: 'register_user' }, userData));
            console.log('Received response from microservice:', response);
            return response;
        } catch (err) {
            console.error('Error registering user:', err);
            throw err;
        }
    }
}