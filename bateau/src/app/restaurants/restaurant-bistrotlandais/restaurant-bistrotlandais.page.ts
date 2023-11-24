import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-bistrotlandais',
  templateUrl: './restaurant-bistrotlandais.page.html',
  styleUrls: ['./restaurant-bistrotlandais.page.scss'],
})
export class RestaurantBistrotlandaisPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToRestaurants() {
    this.router.navigate(['/restaurants']);
  }

}
