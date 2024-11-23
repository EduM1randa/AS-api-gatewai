// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.2
//   protoc               v3.20.3
// source: protos/reservation.proto

/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "reservation";

export interface Reservation {
  id: string;
  userId: string;
  tableId: string;
  reservationDate: string;
  guestCount: number;
  status: string;
}

export interface Response {
  message: string;
  success: boolean;
}

export interface Message {
  body: string;
}

export const RESERVATION_PACKAGE_NAME = "reservation";

export interface ReservationServiceClient {
  createReservation(request: Reservation): Observable<Response>;

  sayHello(request: Message): Observable<Message>;
}

export interface ReservationServiceController {
  createReservation(request: Reservation): Promise<Response> | Observable<Response> | Response;

  sayHello(request: Message): Promise<Message> | Observable<Message> | Message;
}

export function ReservationServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["createReservation", "sayHello"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ReservationService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ReservationService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const RESERVATION_SERVICE_NAME = "ReservationService";
