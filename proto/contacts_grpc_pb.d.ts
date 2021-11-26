// package: contacts
// file: contacts.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as contacts_pb from "./contacts_pb";

interface IContactsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    find: IContactsService_Ifind;
}

interface IContactsService_Ifind extends grpc.MethodDefinition<contacts_pb.FindRequest, contacts_pb.FindResponse> {
    path: "/contacts.Contacts/find";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<contacts_pb.FindRequest>;
    requestDeserialize: grpc.deserialize<contacts_pb.FindRequest>;
    responseSerialize: grpc.serialize<contacts_pb.FindResponse>;
    responseDeserialize: grpc.deserialize<contacts_pb.FindResponse>;
}

export const ContactsService: IContactsService;

export interface IContactsServer {
    find: grpc.handleUnaryCall<contacts_pb.FindRequest, contacts_pb.FindResponse>;
}

export interface IContactsClient {
    find(request: contacts_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: contacts_pb.FindResponse) => void): grpc.ClientUnaryCall;
    find(request: contacts_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.FindResponse) => void): grpc.ClientUnaryCall;
    find(request: contacts_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.FindResponse) => void): grpc.ClientUnaryCall;
}

export class ContactsClient extends grpc.Client implements IContactsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public find(request: contacts_pb.FindRequest, callback: (error: grpc.ServiceError | null, response: contacts_pb.FindResponse) => void): grpc.ClientUnaryCall;
    public find(request: contacts_pb.FindRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: contacts_pb.FindResponse) => void): grpc.ClientUnaryCall;
    public find(request: contacts_pb.FindRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: contacts_pb.FindResponse) => void): grpc.ClientUnaryCall;
}
