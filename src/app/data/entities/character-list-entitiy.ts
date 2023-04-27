import { CharacterEntity } from "./character.entity";

export class CharacterListEntity {
    results: CharacterEntity[];
    next?: string;

    constructor(results: CharacterEntity[], next?: string) {
        this.results = results;
        this.next = next;
    }
}