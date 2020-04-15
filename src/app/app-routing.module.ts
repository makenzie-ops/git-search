import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import{RepoComponent} from './repo/repo.component'
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'user', component:ProfileComponent},
  { path: 'repo', component:RepoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
