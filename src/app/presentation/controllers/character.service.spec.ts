import { TestBed } from '@angular/core/testing';

import { CharacterService } from './character.service';
import { Character } from 'src/app/domain/entities/character.model';

describe('CharacterService', () => {
  let service: CharacterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getCharacter should return a character if initialized', () => {
    let character = new Character('Ryan', 'blonde', 'blue', '');
    service.selectedCharacter = character;

    let result = service.getCharacter();

    expect(result).toBe(character);
  }) 

  it('#selectCharacter should set #selectedCharacter', ()=> {
    let character = new Character('Matt', 'brown', 'green', '');

    service.selectCharacter(character);

    expect(service.selectedCharacter).toBe(character);
  })
});
