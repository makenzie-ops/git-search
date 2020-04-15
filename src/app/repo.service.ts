import { Injectable } from '@angular/core';
import {Repo} from './repo'
import {environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RepoService {

  constructor(private http: HttpClient) { }
  githubRepo(username):Observable<Repo[]>{
    return this.http.get<Repo[]>("https://api.github.com/users/" + username + "/repos" + environment.apiKey)
  }

}
