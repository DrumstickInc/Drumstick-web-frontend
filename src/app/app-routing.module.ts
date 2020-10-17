import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunitiesComponent } from './communities/communities.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { SinglecommunityComponent } from './singlecommunity/singlecommunity.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'communities', component: CommunitiesComponent},
  { path: 'singlecommunity', component: SinglecommunityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
