import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
 user: User= new User();
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }
 addUser(){
    this.userService.addUser(this.user).subscribe(data =>{
       this.router.navigateByUrl("/login")
    } );
  }

}