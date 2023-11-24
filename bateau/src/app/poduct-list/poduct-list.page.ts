import { Component, OnInit } from '@angular/core';
import { ProductListService } from "../services/productList/product-list.service";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastController } from '@ionic/angular';

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

  cartArray: any[] = [];

  constructor(private productListService: ProductListService, private router: Router, private route: ActivatedRoute, private toastController: ToastController) { }

  ngOnInit() {
    const productId = this.route.snapshot.params['id'];
    this.productId = productId;
    this.onLoadData(productId);
    this.affichageType();
  }

  onLoadData(categoryId: number) {
    this.productListService.getProduitList().subscribe(
      data => {
        this.dataProduct = data;
        this.dataok = this.dataProduct.filter((item: any) => item.category == categoryId);
        console.log(this.dataok);
      },
      error => {
        console.log(error);
      }
    );
  }

  affichageType() {
    if (this.productId == 0) {
      this.type = "Poissons";
    } else if (this.productId == 1) {
      this.type = "Coquillages";
    } else if (this.productId == 2) {
      this.type = "Crustacés";
    } else if (this.productId == 3) {
      this.type = "Promotions";
    }
  }

  async addToBasket(product: { name: string, price: number, categoryID: number }) {
    const toast = await this.toastController.create({
      message: `${product.name} à été ajouté au panier !`,
      duration: 1500, // Durée de l'affichage en millisecondes
      position: 'top'
      // Position de la notification
    });

    toast.present();
    // Utilisez le service pour ajouter le produit au panier
    this.productListService.addToCart(product);

    // Récupérez le panier à jour depuis le service
    this.productListService.getCart().subscribe(cart => {
      this.cartArray = cart;

      // Sauvegarde dans le stockage local
      localStorage.setItem("panier", JSON.stringify(this.cartArray));
    });

    console.log("Panier mis à jour :", this.cartArray);


  }
}
