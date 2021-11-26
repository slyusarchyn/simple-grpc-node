// package: contacts
// file: contacts.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FindRequest extends jspb.Message { 
    getPhone(): string;
    setPhone(value: string): FindRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindRequest.AsObject;
    static toObject(includeInstance: boolean, msg: FindRequest): FindRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindRequest;
    static deserializeBinaryFromReader(message: FindRequest, reader: jspb.BinaryReader): FindRequest;
}

export namespace FindRequest {
    export type AsObject = {
        phone: string,
    }
}

export class FindResponse extends jspb.Message { 
    clearResultsList(): void;
    getResultsList(): Array<Contact>;
    setResultsList(value: Array<Contact>): FindResponse;
    addResults(value?: Contact, index?: number): Contact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FindResponse.AsObject;
    static toObject(includeInstance: boolean, msg: FindResponse): FindResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FindResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FindResponse;
    static deserializeBinaryFromReader(message: FindResponse, reader: jspb.BinaryReader): FindResponse;
}

export namespace FindResponse {
    export type AsObject = {
        resultsList: Array<Contact.AsObject>,
    }
}

export class Contact extends jspb.Message { 
    getId(): number;
    setId(value: number): Contact;
    getPhone(): string;
    setPhone(value: string): Contact;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Contact.AsObject;
    static toObject(includeInstance: boolean, msg: Contact): Contact.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Contact, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Contact;
    static deserializeBinaryFromReader(message: Contact, reader: jspb.BinaryReader): Contact;
}

export namespace Contact {
    export type AsObject = {
        id: number,
        phone: string,
    }
}
