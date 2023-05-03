import { Injectable } from '@angular/core';
import { Character } from 'src/app/domain/entities/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  selectedCharacter: Character | undefined;

  constructor() { }

  selectCharacter(character: Character) {
    this.selectedCharacter = character;
  }

  getCharacter(): Character | undefined {
    return this.selectedCharacter;
  }
}
