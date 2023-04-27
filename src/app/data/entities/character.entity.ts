export class CharacterEntity {
    name: String;
    hair_color: String;
    eye_color: String;
    url: String;

    constructor(name: String, hairColor: String, eyeColor: String, url: String) {
        this.name = name;
        this.hair_color = hairColor;
        this.eye_color = eyeColor;
        this.url = url;
    }
}