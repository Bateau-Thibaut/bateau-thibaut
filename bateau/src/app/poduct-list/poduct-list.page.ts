import { Component, OnInit } from '@angular/core';
import {ProductListService} from "../services/productList/product-list.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-poduct-list',
  templateUrl: './poduct-list.page.html',
  styleUrls: ['./poduct-list.page.scss'],
})
export class PoductListPage implements OnInit {

  public dataProduct!: any;
  public dataok: any;
  public productId!: number;
  public type!: string;
  //public selectedCategoryPoisson: number = 0;


  constructor(private productListService:ProductListService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.productId = productId;
    this.onLoadData(productId);
  }

  onLoadData(categoryId: number){
    this.productListService.getProduitList()
      .subscribe(
        data=>{
          this.dataProduct=data;
          this.dataok=this.dataProduct.filter((item: any) => item.category ==categoryId)
          console.log(this.dataok);
        },
        error => {
          console.log(error)
        }
      );
  }
  affichageNom() {
    if (this.productId==0){
      this.type= "Poissons"
    }
  }
}
