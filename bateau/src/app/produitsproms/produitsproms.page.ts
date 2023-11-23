import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProduitspromsService} from "../services/produitsproms/produitsproms.service";

@Component({
  selector: 'app-produitsproms',
  templateUrl: './produitsproms.page.html',
  styleUrls: ['./produitsproms.page.scss'],
})
export class ProduitspromsPage implements OnInit {
public category!: number;
  constructor(private router: Router) { }

  ngOnInit() { }


  goOnPage(category: number) {
    this.router.navigate(['/poduct-list/'+category]);
  }
}
