import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

import {User} from './user'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User;

  constructor(private http:HttpClient) {
    this.user = new User("","","","","","","","")

   }
  
  userInfo (username:string){
    interface ApiResponse{
       avatar_url: any,
       name: string,
       location: string,
       bio: any,
       followers: any,
       following: any,
    }
    let newPromise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>("https://api.github.com/users/" + username + environment.apiKey).toPromise().then(response => {
        this.users.avatar_url = response.avatar_url
        this.users.name = response.name
        this.users.location = response.location
        this.users.bio = response.bio
        this.users.followers = response.followers
        this.users.following = response.following

        resolve()

      }, error => {


        reject(error)

      })

    })
    return newPromise

}
}
