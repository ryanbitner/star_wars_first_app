import { CharacterEntity } from "./character.entity";

export class CharacterListEntity {
    results: CharacterEntity[];

    constructor(results: CharacterEntity[]) {
        this.results = results;
    }
}