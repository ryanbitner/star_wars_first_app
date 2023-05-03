import { Component, OnDestroy } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CharacterList } from 'src/app/domain/entities/character-list.model';
import { Character } from 'src/app/domain/entities/character.model';
import { GetCharacterListUsecase } from 'src/app/domain/usecases/get-character-list.usercase';
import { CharacterService } from '../controllers/character.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [GetCharacterListUsecase]
})
export class HomePage implements OnDestroy {

  characterList: CharacterList = new CharacterList([], undefined); 

  characterSub?: Subscription;

  constructor(private getCharacters: GetCharacterListUsecase, private loadingCtrl: LoadingController, private characterService: CharacterService) {}

  isLoading: boolean = false;

  ngOnInit(): void {
   this.onLoadMore();
  }  

  ngOnDestroy(): void {
    this.characterSub?.unsubscribe;
  }


  onLoadMore() {
    console.log('Load More');
    this.showLoading();
    this.characterSub = this.getCharacters.execute({url: this.characterList.nextPage}).subscribe(characterList => {
      let newList = this.characterList.characters.concat(characterList.characters);
      console.log(characterList.nextPage);
      this.characterList = new CharacterList(newList, characterList.nextPage);
      this.isLoading = false;
      this.dismissLoading();
    });
    }

    async showLoading() {
      this.isLoading = true;
      const loading = await this.loadingCtrl.create({
        message: 'Loading'
    });
  
      loading.present();
    }

    async dismissLoading() {
      this.isLoading = false;
      await this.loadingCtrl.dismiss();
    }

    onSelectCharacter(character: Character) {
      this.characterService.selectCharacter(character);
    }
}

