import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette-homard',
  templateUrl: './recette-homard.page.html',
  styleUrls: ['./recette-homard.page.scss'],
})
export class RecetteHomardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToRecettes() {
    this.router.navigate(['/recettes']);
  }

}
