import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-foudelile',
  templateUrl: './restaurant-foudelile.page.html',
  styleUrls: ['./restaurant-foudelile.page.scss'],
})
export class RestaurantFoudelilePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToRestaurants() {
    this.router.navigate(['/restaurants']);
  }

}
