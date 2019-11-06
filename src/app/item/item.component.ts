  
import { Component, OnInit, Input } from '@angular/core';
import { HarryPotterService } from '../services/harry-potter.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() character;
  hpService: HarryPotterService;

  constructor(hpService: HarryPotterService) { 
    this.hpService = hpService;
  }

  ngOnInit() {
  }

  onAssign(house) {
    this.hpService.onHouseChosen({ name: this.character.name, house: house });
  }
}