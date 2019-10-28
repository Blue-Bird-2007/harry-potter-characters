import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableHouses = [
    { display: 'None', value: '' },
    { display: 'Gryffindor', value: 'gryffindor' },
    { display: 'Slytherin', value: 'slytherin' },
    { display: 'Ravenclaw', value: 'ravenclaw' },
    { display: 'Hufflepuff', value: 'hufflepuff' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
