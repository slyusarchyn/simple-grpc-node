import {FindRequest, FindResponse} from "../proto/contacts_pb";
import {client} from "./utils";
import {ServiceError} from "grpc";

export default function findPhone(phone: string) {
    return new Promise<FindResponse>((resolve, reject) => {
        const request = new FindRequest()
        request.setPhone(phone)

        client.find(request, (err: ServiceError | null, contacts: FindResponse) => {
            if (err) {
                reject(err)
            } else {
                resolve(contacts)
            }
        })
    })
}