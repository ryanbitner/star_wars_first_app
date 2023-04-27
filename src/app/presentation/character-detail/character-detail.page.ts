import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { Character } from 'src/app/domain/entities/character.model';
import { GetCharacterUsecase } from 'src/app/domain/usecases/get-character.usecase';
import { CharacterService } from '../controllers/character.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  providers: [GetCharacterUsecase],
})
export class CharacterDetailPage implements OnInit {
  character: Character | undefined;
  
  constructor(
    private characterService: CharacterService,
  ) {}

  ngOnInit() {
    this.character = this.characterService.getCharacter();
    
  }
}
