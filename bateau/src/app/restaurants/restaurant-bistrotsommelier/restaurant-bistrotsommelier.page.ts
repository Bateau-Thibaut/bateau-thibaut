import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-bistrotsommelier',
  templateUrl: './restaurant-bistrotsommelier.page.html',
  styleUrls: ['./restaurant-bistrotsommelier.page.scss'],
})
export class RestaurantBistrotsommelierPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToRestaurants() {
    this.router.navigate(['/restaurants']);
  }

}
