import { Mapper } from "src/base/utils/mapper";
import { CharacterListEntity } from "../entities/character-list-entitiy";
import { CharacterList } from "src/app/domain/entities/character-list.model";
import { CharacterRepositoryImplementationMapper } from "./character_repository.mapper";
import { Character } from "src/app/domain/entities/character.model";
import { CharacterEntity } from "../entities/character.entity";

export class CharacterListMapperImpl implements Mapper<CharacterListEntity, CharacterList>{

     mapFrom(param: CharacterListEntity): CharacterList {
        let characters = param.results.map(characterEntity => new Character(characterEntity.name, characterEntity.hair_color, characterEntity.eye_color, characterEntity.url));
        return new CharacterList(characters, param.next);
    }
     mapTo(param: CharacterList): CharacterListEntity {
        let characterEntites = param.characters.map(character => new CharacterEntity(character.name, character.hairColor, character.eyeColor, character.url));
        return new CharacterListEntity(characterEntites, param.nextPage);
    }

}