import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public statusAuthentification!: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.statusAuthentification = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        console.log('Vous êtes dorénavant connecté');
        this.statusAuthentification = this.authService.isAuth;
        this.router.navigate(['device']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.statusAuthentification = this.authService.isAuth;
    this.router.navigate(['home']);
  }

}
