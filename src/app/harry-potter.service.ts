import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HarryPotterService {
  private characters = [
    { name: 'Harry Potter', house: ''},
    { name: 'Tom Riddle', house: ''},
    { name: 'Ronald Weasley', house: ''},
    { name: 'Hermione Granger', house: ''},
    { name: 'Cho Chang', house: ''},
    { name: 'Ginny Weasley', house: ''},
    { name: 'Draco Malfoy', house: ''},
    { name: 'Luna Lovegood', house: ''},
    { name: 'Neville Longbottom', house: ''},
    { name: 'Sirius Black', house: ''},
    { name: 'Susan Bones', house: ''},
    { name: 'Remus Lupin', house: ''},
    { name: 'Bellatrix Lestrange', house: ''},
    { name: 'Rubeus Hagrid', house: ''},
    { name: 'Cedric Diggory', house: ''},
    { name: 'Seamus Finnigan', house: ''},
    { name: 'Parvati Patil', house: ''},
    { name: 'Padma Patil', house: ''},
    { name: 'Fenrir Greyback', house: ''},
    { name: 'Ernie MacMillan', house: ''}
  ];
  private logService: LogService;

  constructor(logService: LogService) {
    this.logService = logService;
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.house === chosenList;
    });
  }
  
  onHouseChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].house = charInfo.house;
    this.logService.writeLog(`Changed house of ${charInfo.name}, new house is ${charInfo.house}`);
  }

  addCharacter(name, house) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos !== -1) {
      return;
    }
    const newCharacter = { name: name, house: house };
    this.characters.push(newCharacter);
  }
  
}