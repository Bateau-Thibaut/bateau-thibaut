import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-boat-aquilon',
  templateUrl: './boat-aquilon.page.html',
  styleUrls: ['./boat-aquilon.page.scss'],
})
export class BoatAquilonPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToBoats() {
    this.router.navigate(['/boat']);
  }

}
