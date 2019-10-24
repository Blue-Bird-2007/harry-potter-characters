import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../harry-potter.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [];
  chosenList = 'all';
  hpService: HarryPotterService;

  constructor(hpService: HarryPotterService) { 
    this.hpService = hpService;
  }

  ngOnInit() {
  }

  onChoose(house) {
    this.chosenList = house;
  }

  getCharacters() {
    this.characters = this.hpService.getCharacters(this.chosenList);
    return this.characters;
  }
}