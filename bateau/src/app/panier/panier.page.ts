import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/productList/product-list.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  // Utilisez le service pour récupérer le panier
  cartArray: any[] = [];

  constructor(private productListService: ProductListService) { }

  // Incrémente la quantité du produit dans le panier
  incrementQuantity(item: any) {
    item.quantity += 1;
    item.totalPrice = item.quantity * item.price;
    this.updateCart();
  }

  // Décrémente la quantité du produit dans le panier
  decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.totalPrice = item.quantity * item.price;
    } else {
      // Si la quantité est 1, supprimez complètement le produit du panier
      this.cartArray = this.cartArray.filter(product => product !== item);
    }
    this.updateCart();
  }

  // Met à jour le panier dans le stockage local
  updateCart() {
    localStorage.setItem("panier", JSON.stringify(this.cartArray));
  }


  ngOnInit() {
    // Récupérez le panier depuis le service
    this.productListService.getCart().subscribe(cart => {
      this.cartArray = cart;
    });
  }
}