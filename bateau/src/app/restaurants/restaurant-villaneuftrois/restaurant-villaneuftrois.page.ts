import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-villaneuftrois',
  templateUrl: './restaurant-villaneuftrois.page.html',
  styleUrls: ['./restaurant-villaneuftrois.page.scss'],
})
export class RestaurantVillaneuftroisPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToRestaurants() {
    this.router.navigate(['/restaurants']);
  }

}
