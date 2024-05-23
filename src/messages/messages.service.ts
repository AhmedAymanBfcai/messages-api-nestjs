import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable() // We use Injectable decorator to add this class to DI Container [Marking this class for registration]
export class MessagesService {
    constructor(public messagesRepo: MessagesRepository){}

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}