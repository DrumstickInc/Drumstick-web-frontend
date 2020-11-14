import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CommunitiesComponent } from './communities/communities.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { SignupComponent } from './signup/signup.component';
import { SinglecommunityComponent } from './singlecommunity/singlecommunity.component';
import { SubmitComponent } from './submit/submit.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'communities', component: CommunitiesComponent},
  { path: 'singlecommunity', component: SinglecommunityComponent},
  { path: 'notifications', component: NotificationsComponent},
  { path: 'projects', component: ProjectsComponent},  
  { path: 'submit', component: SubmitComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
