import { Injectable } from "@angular/core";
import { UseCase } from "../base/use-case";
import { Observable } from "rxjs";
import { Character } from "../entities/character.model";
import { CharacterRepository } from "../repositories/character.repository";

@Injectable()
export class GetCharacterUsecase implements UseCase<{url: String}, Character>{

    constructor(private characterRepository: CharacterRepository) {}

    execute(params: { url: String; }): Observable<Character> {
        return this.characterRepository.getCharacter(params.url);
    }

}