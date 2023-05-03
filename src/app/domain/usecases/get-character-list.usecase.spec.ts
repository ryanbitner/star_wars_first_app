import { TestBed } from '@angular/core/testing';
import { GetCharacterUsecase } from './get-character.usecase';
import { CharacterRepository } from '../repositories/character.repository';
import { Character } from '../entities/character.model';
import { of } from 'rxjs';
import { CharacterList } from '../entities/character-list.model';
import { GetCharacterListUsecase } from './get-character-list.usercase';

describe('GetCharacterListUsecase', () => {
  let usecase: GetCharacterListUsecase;

  beforeEach(() => {
    let characterRepoSpy = jasmine.createSpyObj("CharacterRepository", ['getCharacters']) as jasmine.SpyObj<CharacterRepository>;
    characterRepoSpy.getCharacters.and.returnValue(of(new CharacterList([], "")));
    TestBed.configureTestingModule({
        providers: [
            GetCharacterListUsecase,
            {provide: CharacterRepository, useValue: characterRepoSpy}
        ]
    });
  
    usecase = TestBed.inject(GetCharacterListUsecase);
    TestBed.inject(CharacterRepository);
  });

  it('#execute should return empty array', () => {
    
    usecase.execute({url: "" }).subscribe(character => {
        expect(character).toEqual(new CharacterList([], ""));
    });

  });
});
