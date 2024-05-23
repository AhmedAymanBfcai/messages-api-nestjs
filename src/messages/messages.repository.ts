import { readFile, writeFile } from "fs/promises";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesRepository {
    // An async func as we need some asyn lines of code to access the file from the harddrive.
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8'); // A string
        const messages = JSON.parse(contents); // To convert string to obj

        return messages[id]
    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf8'); 
        const messages = JSON.parse(contents);

        return messages;
    }


    async create(content: string) {
        const contents = await readFile('messages.json', 'utf8'); 
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999) // We don't need a decemial numbers.

        messages[id] = { id, content}

        await writeFile('messages.json', JSON.stringify(messages));
    }
}