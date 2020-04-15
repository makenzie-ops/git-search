import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Repo} from '../repo';
import {User} from '../user';
import {UserService} from '../user.service'
import {RepoService} from '../repo.service'
import { from } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:User;
  repo: Repo[];
  myRepos: Repo[];

    newUser = new User ("","","","","","","","");
    getProfileInfo(username:string){
      this.userService.userInfo(username);
      this.user= this.userService.users;
      this.repoService.githubRepo(username).subscribe( data=>{
        this.repo = data
      })

    }

  constructor(private http:HttpClient, private userService: UserService , private repoService: RepoService) { }

  ngOnInit(): void {
  }

}
