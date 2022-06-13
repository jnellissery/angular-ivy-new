import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,map } from 'rxjs';
import { UserService } from '../user.service';
import { IUsers } from '../users';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  fg: FormGroup;

  constructor(
    private fb: FormBuilder,
    private activedroute: ActivatedRoute,
    private router: Router,
    private svc: UserService
  ) {}

  ngOnInit() {
    let selectuser!: IUsers;
    this.activedroute.data.subscribe(y=>selectuser= y['userresolve'])
    this.fg = this.fb.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required, Validators.maxLength(100)]],
    });
    this.fg.controls['title'].setValue(selectuser.title);
    this.fg.controls['body'].setValue(selectuser.body)

  }
  save() {
    this.svc.adduser(this.fg.value);
    this.router.navigate(['home']);
  }
}
