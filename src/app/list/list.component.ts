import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HarryPotterService } from '../services/harry-potter.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters = [];
  activatedRoute: ActivatedRoute;
  hpService: HarryPotterService;

  constructor(activatedRoute: ActivatedRoute, hpService: HarryPotterService) {
    this.activatedRoute = activatedRoute;
    this.hpService = hpService;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      async (params) => {
        this.characters = await this.hpService.getCharacters(params.house);
      }
    );
  }
}