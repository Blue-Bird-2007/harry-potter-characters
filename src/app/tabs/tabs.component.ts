import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  characters = [
    { name: 'Harry Potter', side: ''},
    { name: 'Lord Voldemort', side: ''}
  ];

  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  onChoose(side) {
    this.chosenList = side;
  }

  getCharacters() {
    if (this.chosenList === 'all') {
      return this.chosenList.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }

}