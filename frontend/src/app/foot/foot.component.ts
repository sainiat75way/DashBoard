import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrl: './foot.component.css'
})
export class FootComponent {
  constructor(private router: Router) { }

  isLoginPageOrRegisterPage(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/register' || currentRoute === '/';
  }
}
