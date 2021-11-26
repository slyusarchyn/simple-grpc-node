import {Server, ServerCredentials} from "grpc";
import {ContactsService} from "../proto/contacts_grpc_pb";
import {ContactsServer} from "./services";

const server = new Server();
server.addService(ContactsService, new ContactsServer());

const port = 3000;
const uri = `localhost:${port}`;
console.log(`Listening on ${uri}`);
server.bind(uri, ServerCredentials.createInsecure());

server.start();