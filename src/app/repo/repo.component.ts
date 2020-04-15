import { Component, OnInit } from '@angular/core';
import {RepoService} from '../repo.service'
import {Repo} from '../repo';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  myRepos: Repo[]
  constructor( private repoService: RepoService) { }
  getProfileInfo(username){
    this.repoService.githubRepo(username).subscribe(data => {
      this.myRepos = data

    })
  }

  ngOnInit(): void {
  }

}
