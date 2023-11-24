import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boat-saphir',
  templateUrl: './boat-saphir.page.html',
  styleUrls: ['./boat-saphir.page.scss'],
})
export class BoatSaphirPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToBoats() {
    this.router.navigate(['/boat']);
  }

}
