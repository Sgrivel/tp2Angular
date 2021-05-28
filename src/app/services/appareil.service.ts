import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  public appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'off'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'on'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'off'
    }
  ]

  constructor() { }

  switchOnAll(): void {
    this.appareils.forEach(element => {
      element.status = 'on'
    });
  }

  switchOffAll(): void {
    if (confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareils.forEach(element => {
        element.status = 'off'
      });
    }
  }
}
