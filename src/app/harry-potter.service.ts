import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HarryPotterService {
  private characters = [
    { name: 'Harry Potter', house: ''},
    { name: 'Lord Voldemort', house: ''}
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
    })
    this.characters[pos].house = charInfo.house;
    this.logService.writeLog(`Changed house of ${charInfo.name}, new house is ${charInfo.house}`);
  }
  
}