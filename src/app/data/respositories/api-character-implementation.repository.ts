import { Observable, map } from 'rxjs';
import { Character } from 'src/app/domain/entities/character.model';
import { CharacterRepository } from 'src/app/domain/repositories/character.repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterEntity } from '../entities/character.entity';
import { CharacterRepositoryImplementationMapper } from '../mappers/character_repository.mapper';
import { CharacterListEntity } from '../entities/character-list-entitiy';

@Injectable({
  providedIn: 'root',
})
export class APICharacterRepositoryImp implements CharacterRepository {
  characterMapper = new CharacterRepositoryImplementationMapper();

  constructor(private http: HttpClient) {}

    getCharacter(url: string): Observable<Character> {
        return this.http.get<CharacterEntity>(url).pipe(map(this.characterMapper.mapFrom));
    }

  getCharacters(): Observable<Character[]> {
    return this.http.get<CharacterListEntity>('https://swapi.dev/api/people').pipe(
     map(data =>{
        let characters = data.results;
        return characters.map(character => this.characterMapper.mapFrom(character));})
    );
  }
}
