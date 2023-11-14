import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produitsproms',
  templateUrl: './produitsproms.page.html',
  styleUrls: ['./produitsproms.page.scss'],
})
export class ProduitspromsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
