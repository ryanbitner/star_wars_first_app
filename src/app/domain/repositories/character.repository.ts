import { Observable } from "rxjs";
import { Character } from "../entities/character.model";
import { CharacterList } from "../entities/character-list.model";

export abstract class CharacterRepository {
   abstract getCharacters(url?: string): Observable<CharacterList>;
   abstract getCharacter(url: String): Observable<Character>;
}