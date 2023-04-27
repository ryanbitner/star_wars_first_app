import { Observable, map } from 'rxjs';
import { Character } from 'src/app/domain/entities/character.model';
import { CharacterRepository } from 'src/app/domain/repositories/character.repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterEntity } from '../entities/character.entity';
import { CharacterRepositoryImplementationMapper } from '../mappers/character_repository.mapper';
import { CharacterListEntity } from '../entities/character-list-entitiy';
import { CharacterList } from 'src/app/domain/entities/character-list.model';
import { CharacterListMapperImpl } from '../mappers/character-list-repository.mapper';

@Injectable({
  providedIn: 'root',
})
export class APICharacterRepositoryImp implements CharacterRepository {

    characterListMapper = new CharacterListMapperImpl;
    characterDetailMapper = new CharacterRepositoryImplementationMapper();

  BASE_PEOPLE_URL = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {}

    getCharacter(url: string): Observable<Character> {
        return this.http.get<CharacterEntity>(url).pipe(map(this.characterDetailMapper.mapFrom));
    }

  getCharacters(url?: string): Observable<CharacterList> {
    return this.http.get<CharacterListEntity>(url??this.BASE_PEOPLE_URL).pipe(map(this.characterListMapper.mapFrom));
  }
}
