import { TestBed } from '@angular/core/testing';
import { GetCharacterUsecase } from './get-character.usecase';
import { CharacterRepository } from '../repositories/character.repository';
import { Character } from '../entities/character.model';
import { of } from 'rxjs';

describe('GetCharacterUsecase', () => {
  let usecase: GetCharacterUsecase;

  beforeEach(() => {
    let characterRepoSpy = jasmine.createSpyObj("CharacterRepository", ['getCharacter']) as jasmine.SpyObj<CharacterRepository>;
    characterRepoSpy.getCharacter.and.returnValue(of(new Character("", "", "", "",)));
    TestBed.configureTestingModule({
        providers: [
            GetCharacterUsecase,
            {provide: CharacterRepository, useValue: characterRepoSpy}
        ]
    });
  
    usecase = TestBed.inject(GetCharacterUsecase);
    TestBed.inject(CharacterRepository);
  });

  it('#execute should call getCharacter once', () => {
    
    usecase.execute({ url: '' }).subscribe(character => {
        expect(character).toEqual(new Character("", "", "", "",));
    });

  });
});
