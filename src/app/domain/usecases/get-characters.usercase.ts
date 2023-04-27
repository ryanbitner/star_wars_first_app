import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { Character } from "../entities/character.model";
import { CharacterRepository } from "../repositories/character.repository";
import { Injectable } from "@angular/core";

@Injectable()
export class GetCharactersUsecase implements UseCase<void, Character[]>{

    constructor(private characterRepository: CharacterRepository) {}

    execute(params: void): Observable<Character[]> {
       return this.characterRepository.getCharacters();
    }

}