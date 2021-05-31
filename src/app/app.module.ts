import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostListComponent } from './component/post-list/post-list.component';
import { PostListItemComponent } from './component/post-list-item/post-list-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogComponent } from './component/blog/blog.component';
import { HomeComponent } from './component/home/home.component';
import { AppareilViewComponent } from './component/appareil-view/appareil-view.component';
import { AppareilComponent } from './component/appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './component/auth/auth.component';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './component/single-appareil/single-appareil.component';
import { ErrorComponent } from './component/error/error.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'device', component: AppareilViewComponent},
  {path: 'device/:id', component: SingleAppareilComponent},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AppareilViewComponent},
  {path: 'error', component: ErrorComponent },
  {path: '**', redirectTo: 'error' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    HomeComponent,
    BlogComponent,
    AppareilViewComponent,
    AppareilComponent,
    AuthComponent,
    SingleAppareilComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
