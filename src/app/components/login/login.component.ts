import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginFirebaseService } from 'src/app/services/login-firebase.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  constructor(private loginService: LoginFirebaseService, private tokenStorage: TokenStorageService, private router:Router){

  }

  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  isSuccessful = false;

  roles: string = '';

  ngOnInit(){

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['/addjob']);
    }

  }

  signIn(f:NgForm){
    console.log(f.value);
    const { username, password } = f.value;
    this.loginService.login(f.value).subscribe(
      data => {

        // Response from backend
        const user = {
          id: data.name,
          roles: "ADMIN"
        }

        this.tokenStorage.saveToken(data.name);
        this.tokenStorage.saveUser(user);

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.roles = this.tokenStorage.getRoles();
        console.log(this.roles);

        if (this.roles == 'ADMIN') {
          this.router.navigate(['/home']);
        }else{
          this.isLoginFailed = false;
        }

      },
      err => {
        this.isLoginFailed = true;
      }
    );
  }

}
