import {ContactsClient} from "../proto/contacts_grpc_pb";
import {credentials} from "grpc";

const port = 3000

export const client = new ContactsClient(
    `localhost:${port}`,
    credentials.createInsecure()
)

export const noop = () => {
}