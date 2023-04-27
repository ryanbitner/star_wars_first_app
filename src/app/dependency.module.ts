import { NgModule } from '@angular/core';
import { CharacterRepository } from './domain/repositories/character.repository';
import { APICharacterRepositoryImp } from './data/respositories/api-character-implementation.repository';
import { GetCharacterList } from './domain/usecases/get-characters.usercase';

@NgModule({
  providers: [
    { provide: CharacterRepository, useClass: APICharacterRepositoryImp },
  
  ],
})
export class DependencyModule {}
