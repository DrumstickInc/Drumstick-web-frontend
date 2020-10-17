import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommunitiesComponent } from './communities/communities.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SinglecommunityComponent } from './singlecommunity/singlecommunity.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent,
    CommunitiesComponent,
    NavbarComponent,
    SinglecommunityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
