import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recette-tourteau',
  templateUrl: './recette-tourteau.page.html',
  styleUrls: ['./recette-tourteau.page.scss'],
})
export class RecetteTourteauPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnGoToRecettes() {
    this.router.navigate(['/recettes']);
  }

}
