// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var contacts_pb = require('./contacts_pb.js');

function serialize_contacts_FindRequest(arg) {
  if (!(arg instanceof contacts_pb.FindRequest)) {
    throw new Error('Expected argument of type contacts.FindRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contacts_FindRequest(buffer_arg) {
  return contacts_pb.FindRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_contacts_FindResponse(arg) {
  if (!(arg instanceof contacts_pb.FindResponse)) {
    throw new Error('Expected argument of type contacts.FindResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_contacts_FindResponse(buffer_arg) {
  return contacts_pb.FindResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ContactsService = exports.ContactsService = {
  find: {
    path: '/contacts.Contacts/find',
    requestStream: false,
    responseStream: false,
    requestType: contacts_pb.FindRequest,
    responseType: contacts_pb.FindResponse,
    requestSerialize: serialize_contacts_FindRequest,
    requestDeserialize: deserialize_contacts_FindRequest,
    responseSerialize: serialize_contacts_FindResponse,
    responseDeserialize: deserialize_contacts_FindResponse,
  },
};

exports.ContactsClient = grpc.makeGenericClientConstructor(ContactsService);
