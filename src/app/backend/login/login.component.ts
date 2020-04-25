import { Component, OnInit } from '@angular/core';
import { User } from '../../User';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
thongBao="";
user: User=new User;
users: User[];


  constructor(
    private userService: UserService,
    private router: Router
  ) {}
    ngOnInit(): void {
      this.getUser();
    }
    login(){
      var i=0, len=this.users.length;
      for (; i <len; i++) {
       if(this.users[i].username==this.user.username && this.users[i].password==this.user.password){
         this.userService.userLogin=this.users[i];
         console.log(this.userService.userLogin.username);
         this.userService.isLogin=true;
         this.router.navigateByUrl("/admin")
       } 
      }
      this.thongBao="Sai Username hoặc Password";
    }
    getUser(){
      this.userService.getUsers().subscribe(data => {
        console.log(data);
        this.users=data;
      });
    }
   }

 
