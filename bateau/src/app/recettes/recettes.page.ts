import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recettes',
  templateUrl: './recettes.page.html',
  styleUrls: ['./recettes.page.scss'],
})
export class RecettesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToHomard() {
    this.router.navigate(['/recette-homard']);
  }
  OnGoToStjacques() {
    this.router.navigate(['/recette-stjacques']);
  }
  OnGoToBar() {
    this.router.navigate(['/recette-bar']);
  }
  OnGoToTourteau() {
    this.router.navigate(['/recette-tourteau']);
  }
  OnGoToContact() {
    this.router.navigate(['/contact']);
  }

}
