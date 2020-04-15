import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import{User} from '../user'
import { from } from 'rxjs';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  newUser = new User("","", "", "", "", "","","")
  @Output()
  searchUser: EventEmitter<string> = new EventEmitter<string>()

  submitUser() {
    this.searchUser.emit(this.newUser.name);
    this.newUser = new User("","", "", "","", "", "","")

  }

  constructor() { }

  ngOnInit(): void {
  }

}
