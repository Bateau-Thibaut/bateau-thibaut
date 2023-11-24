import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-bistrotgascons',
  templateUrl: './restaurant-bistrotgascons.page.html',
  styleUrls: ['./restaurant-bistrotgascons.page.scss'],
})
export class RestaurantBistrotgasconsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  OnGoToRestaurants() {
    this.router.navigate(['/restaurants']);
  }



}
