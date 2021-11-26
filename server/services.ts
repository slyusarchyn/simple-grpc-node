import {
    ServerUnaryCall,
    sendUnaryData,
    ServiceError,
} from "grpc";

import {IContactsServer as ContactsServerInterface } from "../proto/contacts_grpc_pb";
import {FindResponse, FindRequest} from "../proto/contacts_pb";
import {contacts} from "./db";

export class ContactsServer implements ContactsServerInterface {
    find(call: ServerUnaryCall<FindRequest>, callback: sendUnaryData<FindResponse>) {
        const phone = call.request.getPhone();
        const contact = contacts.find((p) => p.getPhone() === phone);

        if (!contact) {
            const error: ServiceError = {
                name: "Contact Missing",
                message: `Contact with ${phone} does not exist.`,
            };
            callback(error, null);
            return;
        }

        console.log(`getPhone: returning ${contact.getId()} (id: ${contact.getPhone()}).`);
        let response = new FindResponse
        response.addResults(contact)
        callback(null, response);
    }
}