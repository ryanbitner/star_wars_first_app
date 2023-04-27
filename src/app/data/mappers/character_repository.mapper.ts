import { Mapper } from "src/base/utils/mapper";
import { CharacterEntity } from "../entities/character.entity";
import { Character } from "src/app/domain/entities/character.model";

export class CharacterRepositoryImplementationMapper extends Mapper<CharacterEntity, Character> {
    override mapFrom(param: CharacterEntity): Character {
        return new Character(param.name, param.hair_color, param.eye_color, param.url);
    }
    override mapTo(param: Character): CharacterEntity {
        let url = "https://swapi.dev/api/people/{{ param.id }}";
        throw new CharacterEntity(param.name, param.hairColor, param.eyeColor, url);
    }
}