import { Component } from '@angular/core';
import { Character } from 'src/app/domain/entities/character.model';
import { GetCharactersUsecase } from 'src/app/domain/usecases/get-characters.usercase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [GetCharactersUsecase]
})
export class HomePage {

  characters: Character[] = [];

  constructor(private getCharacter: GetCharactersUsecase) {}

  ngOnInit(): void {
    this.getCharacter.execute().subscribe(characters => this.characters = characters);
  }  

}
