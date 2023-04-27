import { Injectable } from '@angular/core';
import { Character } from 'src/app/domain/entities/character.model';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  selectedCharacted: Character | undefined;

  constructor() { }

  selectCharacter(character: Character) {
    this.selectedCharacted = character;
  }

  getCharacter(): Character | undefined {
    return this.selectedCharacted;
  }
}
