import { Character } from "./character.model";

export class CharacterList {
    characters: Character[];
    nextPage?: string;

    constructor(characters: Character[], nextPage?: string) {
        this.characters = characters;
        this.nextPage = nextPage;
    }
}