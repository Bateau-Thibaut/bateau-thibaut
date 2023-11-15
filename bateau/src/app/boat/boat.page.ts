import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';


@Component({
  selector: 'app-boat',
  templateUrl: './boat.page.html',
  styleUrls: ['./boat.page.scss'],
})
export class BoatPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToContact() {
    this.router.navigate(['/contact']);
  }

  OnGoToDelabrise() {
    this.router.navigate(['/boat-delabrise']);
  }
  OnGoToSaphir() {
    this.router.navigate(['/boat-saphir']);
  }
  OnGoToGastmicher() {
    this.router.navigate(['/boat-gastmicher']);
  }
  OnGoToAquilon() {
    this.router.navigate(['/boat-aquilon']);
  }



}
