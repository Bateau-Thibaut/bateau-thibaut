import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  private cartSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public cart$: Observable<any[]> = this.cartSubject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getProduitList() {
    return this.httpClient.get("http://51.255.166.155:1352/tig/products/");
  }

  addToCart(product: { name: string, price: number, categoryID: number }) {

    // Exemple d'ajout au panier
    const cartItem = {
      name: product.name,
      price: product.price,
      categoryID: product.categoryID,
      quantity: 1,
      totalPrice: product.price,
    };

    // Récupérez le panier actuel
    const currentCart = this.cartSubject.value;

    // Vérifiez si le produit est déjà dans le panier
    const existingItemIndex = currentCart.findIndex(item => item.name === cartItem.name && item.categoryID === cartItem.categoryID);

    if (existingItemIndex !== -1) {
      // Si le produit existe, mettez à jour la quantité et le prix total
      currentCart[existingItemIndex].quantity += 1;
      currentCart[existingItemIndex].totalPrice += product.price;
    } else {
      // Sinon, ajoutez le produit au panier
      currentCart.push(cartItem);
    }

    // Mettez à jour le sujet BehaviorSubject pour informer les observateurs du changement
    this.cartSubject.next(currentCart);
  }

  getCart() {
    return this.cart$;
  }

  clearCart() {
    this.cartSubject.next([]); // Réinitialisez le panier à un tableau vide
    localStorage.removeItem("panier"); // Supprimez le panier du stockage local
  }
}
