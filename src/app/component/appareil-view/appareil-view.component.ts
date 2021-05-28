import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  appareils!: any[];
 
  constructor(private appareilService: AppareilService) { 

  }

  ngOnInit(): void {
    this.appareils = this.appareilService.appareils;
  }

  switchOnAll(): void {
    this.appareilService.switchOnAll();
  }

  switchOffAll(): void {
    this.appareilService.switchOffAll();
  }

}
