import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boat-delabrise',
  templateUrl: './boat-delabrise.page.html',
  styleUrls: ['./boat-delabrise.page.scss'],
})
export class BoatDelabrisePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToBoats() {
    this.router.navigate(['/boat']);
  }

}
