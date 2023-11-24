import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette-stjacques',
  templateUrl: './recette-stjacques.page.html',
  styleUrls: ['./recette-stjacques.page.scss'],
})
export class RecetteStjacquesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToRecettes() {
    this.router.navigate(['/recettes']);
  }

}
