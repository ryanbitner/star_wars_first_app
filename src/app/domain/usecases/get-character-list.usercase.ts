import { Observable } from "rxjs";
import { UseCase } from "../base/use-case";
import { CharacterRepository } from "../repositories/character.repository";
import { CharacterList } from "../entities/character-list.model";
import { Injectable } from "@angular/core";

@Injectable()
export class GetCharacterListUsecase implements UseCase<{url?: string}, CharacterList>{

    constructor(private characterRepository: CharacterRepository) {}

    execute(params: {url?: string}): Observable<CharacterList> {
       return this.characterRepository.getCharacters(params.url);
    }

}