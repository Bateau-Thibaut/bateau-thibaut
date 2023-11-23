import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/productList/product-list.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.page.html',
  styleUrls: ['./panier.page.scss'],
})
export class PanierPage implements OnInit {

  // Utilisez le service pour récupérer le panier
  cartArray: any[] = [];
  address: string = "123 Rue de la République, Paris";
  pickupDate: Date = new Date(); // Vous devez définir la date de récupération selon votre logique.
  constructor(private productListService: ProductListService, private alertController: AlertController, private toastController: ToastController) { }

  // Incrémente la quantité du produit dans le panier
  incrementQuantity(item: any) {
    item.quantity += 1;
    item.totalPrice = item.quantity * item.price;
    this.updateCart();
  }

  // Décrémente la quantité du produit dans le panier
  async decrementQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity -= 1;
      item.totalPrice = item.quantity * item.price;
    } else {
      const alert = await this.alertController.create({
        header: 'Suppression du panier',
        message: `Voulez-vous supprimer ${item.name} du panier ?`,
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            handler: () => {
              console.log('Supression annulée');
            }
          },
          {
            text: 'Oui',
            handler: async () => {
              console.log('Commande confirmée');
              this.cartArray = this.cartArray.filter(product => product !== item);

            }
          }
        ]
      });
      await alert.present();
    }
    this.updateCart()
  }


  // Met à jour le panier dans le stockage local
  updateCart() {
    localStorage.setItem("panier", JSON.stringify(this.cartArray));
  }

  async validateOrder() {
    const alert = await this.alertController.create({
      header: 'Confirmer la commande',
      message: `Envoyer votre commande de ${this.calculateTotalPrice()} € à Bateau Thibault ?`,
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            console.log('Commande annulée');
          }
        },
        {
          text: 'Oui',
          handler: async () => {
            console.log('Commande confirmée');
            // Ajoutez ici la logique pour envoyer la commande

            // Affichez la notification de confirmation
            const toast = await this.toastController.create({
              message: 'Commande confirmée',
              duration: 2000, // Durée de l'affichage en millisecondes
              position: 'top' // Position de la notification
            });
            this.productListService.clearCart();
            toast.present();
          }

        }
      ]
    });

    await alert.present();

  }

  calculateTotalPrice(): number {
    return this.cartArray.reduce((total, item) => total + item.totalPrice, 0);
  }



  ngOnInit() {
    // Récupérez le panier depuis le service
    this.productListService.getCart().subscribe(cart => {
      this.cartArray = cart;
    });
  }
}