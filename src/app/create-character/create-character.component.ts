import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../harry-potter.service';

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
  hpService: HarryPotterService;

  constructor(hpService: HarryPotterService) {
    this.hpService = hpService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    console.log(submittedForm.value);
    this.hpService.addCharacter(submittedForm.value.name, submittedForm.value.house);
  }

}
