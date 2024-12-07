// package: reservation
// file: protos/protos/reservation.proto

import * as jspb from "google-protobuf";

export class Message extends jspb.Message {
  getBody(): string;
  setBody(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    body: string,
  }
}

export class CreateReservationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getTableId(): string;
  setTableId(value: string): void;

  getReservationDate(): string;
  setReservationDate(value: string): void;

  getGuestCount(): number;
  setGuestCount(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReservationRequest): CreateReservationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReservationRequest;
  static deserializeBinaryFromReader(message: CreateReservationRequest, reader: jspb.BinaryReader): CreateReservationRequest;
}

export namespace CreateReservationRequest {
  export type AsObject = {
    id: string,
    userId: string,
    tableId: string,
    reservationDate: string,
    guestCount: number,
    status: string,
  }
}

export class GetReservationByIDRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReservationByIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReservationByIDRequest): GetReservationByIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReservationByIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReservationByIDRequest;
  static deserializeBinaryFromReader(message: GetReservationByIDRequest, reader: jspb.BinaryReader): GetReservationByIDRequest;
}

export namespace GetReservationByIDRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetReservationsByUserIDRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReservationsByUserIDRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReservationsByUserIDRequest): GetReservationsByUserIDRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReservationsByUserIDRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReservationsByUserIDRequest;
  static deserializeBinaryFromReader(message: GetReservationsByUserIDRequest, reader: jspb.BinaryReader): GetReservationsByUserIDRequest;
}

export namespace GetReservationsByUserIDRequest {
  export type AsObject = {
    userId: string,
  }
}

export class GetReservationsByDateRequest extends jspb.Message {
  getReservationDate(): string;
  setReservationDate(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReservationsByDateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReservationsByDateRequest): GetReservationsByDateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetReservationsByDateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReservationsByDateRequest;
  static deserializeBinaryFromReader(message: GetReservationsByDateRequest, reader: jspb.BinaryReader): GetReservationsByDateRequest;
}

export namespace GetReservationsByDateRequest {
  export type AsObject = {
    reservationDate: string,
  }
}

export class UpdateReservationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getTableId(): string;
  setTableId(value: string): void;

  getReservationDate(): string;
  setReservationDate(value: string): void;

  getGuestCount(): number;
  setGuestCount(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReservationRequest): UpdateReservationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReservationRequest;
  static deserializeBinaryFromReader(message: UpdateReservationRequest, reader: jspb.BinaryReader): UpdateReservationRequest;
}

export namespace UpdateReservationRequest {
  export type AsObject = {
    id: string,
    tableId: string,
    reservationDate: string,
    guestCount: number,
    status: string,
  }
}

export class DeleteReservationRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReservationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReservationRequest): DeleteReservationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteReservationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReservationRequest;
  static deserializeBinaryFromReader(message: DeleteReservationRequest, reader: jspb.BinaryReader): DeleteReservationRequest;
}

export namespace DeleteReservationRequest {
  export type AsObject = {
    id: string,
  }
}

export class Response extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    message: string,
    success: boolean,
  }
}

export class Reservation extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  getTableId(): string;
  setTableId(value: string): void;

  getReservationDate(): string;
  setReservationDate(value: string): void;

  getGuestCount(): number;
  setGuestCount(value: number): void;

  getStatus(): string;
  setStatus(value: string): void;

  getCreateAt(): string;
  setCreateAt(value: string): void;

  getUpdateAt(): string;
  setUpdateAt(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reservation.AsObject;
  static toObject(includeInstance: boolean, msg: Reservation): Reservation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reservation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reservation;
  static deserializeBinaryFromReader(message: Reservation, reader: jspb.BinaryReader): Reservation;
}

export namespace Reservation {
  export type AsObject = {
    id: string,
    userId: string,
    tableId: string,
    reservationDate: string,
    guestCount: number,
    status: string,
    createAt: string,
    updateAt: string,
  }
}

export class Reservations extends jspb.Message {
  clearReservationsList(): void;
  getReservationsList(): Array<Reservation>;
  setReservationsList(value: Array<Reservation>): void;
  addReservations(value?: Reservation, index?: number): Reservation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reservations.AsObject;
  static toObject(includeInstance: boolean, msg: Reservations): Reservations.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Reservations, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reservations;
  static deserializeBinaryFromReader(message: Reservations, reader: jspb.BinaryReader): Reservations;
}

export namespace Reservations {
  export type AsObject = {
    reservationsList: Array<Reservation.AsObject>,
  }
}

