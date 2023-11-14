import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  OnGoToBoats() {
    this.router.navigate(['/boat']);
  }
  OnGoToRestaurants() {
    this.router.navigate(['/restaurants']);
  }

  OnGoToRecettes() {
    this.router.navigate(['/recettes']);
  }

  OnGoToContact() {
    this.router.navigate(['/contact']);
  }

  OnGoToProductsProms() {
    this.router.navigate(['/produitsproms']);
  }
}
