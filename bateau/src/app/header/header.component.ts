import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  OnGoToHome() {
    this.router.navigate(['/home']);
  }

  OnGoToPanier() {
    this.router.navigate(['/panier']);
  }

}
