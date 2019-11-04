import { LogService } from './log.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IConfig } from './app-config.model';
import { AppConfig } from './app.config';
import { Subject } from 'rxjs';

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
  private charactersFromApi = [];
  private logService: LogService;
  http: HttpClient;
  appConfig: AppConfig;
  iConfig: IConfig;

  constructor(logService: LogService, http: HttpClient, appConfig: AppConfig) {
    this.logService = logService;
    this.http = http;
    this.appConfig = appConfig;
  }

  // fetchCharacters() {
  //   let url: string;
  //   let frog;
  //   const subject = new Subject<any[]>();
  //   this.appConfig.getConfig().subscribe((res) => {
  //     url = res.body.apiServer.harryPotterUrl;
  //     this.http.get(url).subscribe((response: Response) => {
  //       frog = response;
  //       this.characters = frog.map(tadpole => tadpole.name);
  //       console.log(this.characters);
  //       subject.next(this.characters);
  //     });
  //   });
  //   console.log(subject.asObservable());
  //   return subject.asObservable();
  // }

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