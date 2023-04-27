import { Observable } from "rxjs";
import { Character } from "../entities/character.model";

export abstract class CharacterRepository {
   abstract getCharacters(): Observable<Character[]>;
   abstract getCharacter(url: String): Observable<Character>;
}