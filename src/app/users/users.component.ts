import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { IUsers } from '../users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user$: Observable<IUsers[]>;
  constructor(private usersvc: UserService, private router: Router) {}
  ngOnInit(): void {
    if (!this.usersvc.user.value.length){
    this.user$ = this.usersvc.getusers();
    this.user$.subscribe(x=>{
      this.usersvc.user.next(x);
    })
    }
    else{
      this.user$= this.usersvc.user.asObservable();
    }
  
  }
  showedetails(selectedrow: IUsers) {
    this.usersvc.selecteduserbehaviour=selectedrow;
    this.router.navigate([
      'adduser',
     // { user: JSON.stringify(selectedrow),skipLocationChange: true}
    ]);
  }
}
