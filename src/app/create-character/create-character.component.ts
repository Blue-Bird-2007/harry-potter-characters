import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../services/harry-potter.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableHouses = [
    { display: 'None', value: '' },
    { display: 'Gryffindor', value: 'Gryffindor' },
    { display: 'Slytherin', value: 'Slytherin' },
    { display: 'Ravenclaw', value: 'Ravenclaw' },
    { display: 'Hufflepuff', value: 'Hufflepuff' }
  ];
  hpService: HarryPotterService;

  constructor(hpService: HarryPotterService, private authService: AuthService, private router: Router) {
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

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
