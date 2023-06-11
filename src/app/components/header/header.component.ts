import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input()
  isLoggedIn!:boolean

  constructor(private tokenStorageService:TokenStorageService, private router:Router){}

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(["/home"]);
    // window.location.reload();
  }
}
