import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette-bar',
  templateUrl: './recette-bar.page.html',
  styleUrls: ['./recette-bar.page.scss'],
})
export class RecetteBarPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToRecettes() {
    this.router.navigate(['/recettes']);
  }

}
