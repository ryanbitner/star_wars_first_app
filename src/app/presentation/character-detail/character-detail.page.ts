import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Character } from 'src/app/domain/entities/character.model';
import { GetCharacterUsecase } from 'src/app/domain/usecases/get-character.usecase';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  providers: [GetCharacterUsecase]
})
export class CharacterDetailPage implements OnInit {

  character: Character | undefined;

  characterChanged = new Subject<Character>(); 

  constructor(private getCharacterUsecase: GetCharacterUsecase, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let url = this.activatedRoute.queryParamMap.subscribe(params => {
      let url = params.get('url');
      if (url !== null) {
        this.getCharacterUsecase.execute({url: url}).subscribe(character => {
          console.log(character);
          this.character =character;

        });
      }
    })
  }

}
