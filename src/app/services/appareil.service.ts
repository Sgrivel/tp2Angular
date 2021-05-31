import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppareilComponent } from '../component/appareil/appareil.component';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

  public appareils = [
    {
      id: 0,
      name: 'Machine à laver',
      status: 'off'
    },
    {
      id: 1,
      name: 'Frigo',
      status: 'on'
    },
    {
      id: 2,
      name: 'Ordinateur',
      status: 'off'
    }
  ]

  constructor(private router: Router) { }

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

  getAppareilById(id: number): any {
    const appareil = this.appareils.find(
      (s) => {
        return s.id === id;
      }
    );
    if (!appareil) {
      this.router.navigate(['error']);
    }
    return appareil;
  }
}
