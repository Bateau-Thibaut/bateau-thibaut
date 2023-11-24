import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToContact() {
    this.router.navigate(['/contact']);
  }



  OnGoToBistrotgascons() {
    this.router.navigate(['/restaurant-bistrotgascons']);
  }
  OnGoToBistrotlandais() {
    this.router.navigate(['/restaurant-bistrotlandais']);
  }
  OnGoToBistrotsommelier() {
    this.router.navigate(['/restaurant-bistrotsommelier']);
  }
  OnGoToFoudelile() {
    this.router.navigate(['/restaurant-foudelile']);
  }
  OnGoToVillaneuftrois() {
    this.router.navigate(['/restaurant-villaneuftrois']);
  }

}
