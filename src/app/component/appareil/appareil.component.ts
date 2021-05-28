import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input()
  appareilName!: string;

  @Input()
  appareilStatus!: string;

  constructor() { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.appareilStatus;
  }

  changeState(): void {
    if (this.appareilStatus === 'on') {
      this.appareilStatus = 'off';
    } else {
      this.appareilStatus = 'on';
    }
  }

}
