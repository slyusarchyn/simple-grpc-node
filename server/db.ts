import {Contact} from "../proto/contacts_pb";

export function contactToClass({id, phone}: Contact.AsObject) {
    return (new Contact()).setId(id).setPhone(phone);
}

export const contacts: Contact[] = [
    {id: 1, phone: "380676004101"},
    {id: 2, phone: "380636004101"}
].map(contactToClass)