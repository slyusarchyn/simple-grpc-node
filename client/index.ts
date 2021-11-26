import findPhone from "./findPhone";

async function run() {
    const contacts = await findPhone("380676004101")
    console.log(contacts.toObject())
}

run()