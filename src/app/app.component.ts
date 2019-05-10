import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private roles: string[];
  private authority: string ;

  clickBroker(): void {
    document.getElementById('bar-broker').style.display = 'block';
  }
  clickAdmin(): void {
    document.getElementById('bar-admin').style.display = 'block';
  }
  logout() {
    this.tokenStorage.signOut();
    //window.location.reload();
     //this.router.navigateByUrl('auth/login');
    // window.location.reload();
    window.location.href = "http://localhost:4200/public";
  }
  constructor(private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_BROKER') {
          this.authority = 'broker';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}
