import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boat-gastmicher',
  templateUrl: './boat-gastmicher.page.html',
  styleUrls: ['./boat-gastmicher.page.scss'],
})
export class BoatGastmicherPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToBoats() {
    this.router.navigate(['/boat']);
  }

}
