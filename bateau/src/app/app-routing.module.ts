import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'boat',
    loadChildren: () => import('./boat/boat.module').then(m => m.BoatPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./restaurants/restaurants.module').then(m => m.RestaurantsPageModule)
  },
  {
    path: 'recettes',
    loadChildren: () => import('./recettes/recettes.module').then(m => m.RecettesPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactPageModule)
  },
  {
    path: 'produitsproms',
    loadChildren: () => import('./produitsproms/produitsproms.module').then(m => m.ProduitspromsPageModule)
  },
  {
    path: 'boat-delabrise',
    loadChildren: () => import('./boat/boat-delabrise/boat-delabrise.module').then(m => m.BoatDelabrisePageModule)
  },
  {
    path: 'boat-saphir',
    loadChildren: () => import('./boat/boat-saphir/boat-saphir.module').then(m => m.BoatSaphirPageModule)
  },
  {
    path: 'boat-gastmicher',
    loadChildren: () => import('./boat/boat-gastmicher/boat-gastmicher.module').then(m => m.BoatGastmicherPageModule)
  },
  {
    path: 'boat-aquilon',
    loadChildren: () => import('./boat/boat-aquilon/boat-aquilon.module').then(m => m.BoatAquilonPageModule)
  },
  {
    path: 'recette-homard',
    loadChildren: () => import('./recettes/recette-homard/recette-homard.module').then(m => m.RecetteHomardPageModule)
  },
  {
    path: 'recette-stjacques',
    loadChildren: () => import('./recettes/recette-stjacques/recette-stjacques.module').then(m => m.RecetteStjacquesPageModule)
  },
  {
    path: 'recette-bar',
    loadChildren: () => import('./recettes/recette-bar/recette-bar.module').then(m => m.RecetteBarPageModule)
  },
  {
    path: 'recette-tourteau',
    loadChildren: () => import('./recettes/recette-tourteau/recette-tourteau.module').then(m => m.RecetteTourteauPageModule)
  },
  {
    path: 'restaurant-bistrotgascons',
    loadChildren: () => import('./restaurants/restaurant-bistrotgascons/restaurant-bistrotgascons.module').then(m => m.RestaurantBistrotgasconsPageModule)
  },
  {
    path: 'restaurant-bistrotlandais',
    loadChildren: () => import('./restaurants/restaurant-bistrotlandais/restaurant-bistrotlandais.module').then(m => m.RestaurantBistrotlandaisPageModule)
  },
  {
    path: 'restaurant-bistrotsommelier',
    loadChildren: () => import('./restaurants/restaurant-bistrotsommelier/restaurant-bistrotsommelier.module').then(m => m.RestaurantBistrotsommelierPageModule)
  },
  {
    path: 'restaurant-foudelile',
    loadChildren: () => import('./restaurants/restaurant-foudelile/restaurant-foudelile.module').then(m => m.RestaurantFoudelilePageModule)
  },
  {
    path: 'restaurant-villaneuftrois',
    loadChildren: () => import('./restaurants/restaurant-villaneuftrois/restaurant-villaneuftrois.module').then(m => m.RestaurantVillaneuftroisPageModule)
  },
  {
    path: 'poduct-list/:id',
    loadChildren: () => import('./poduct-list/poduct-list.module').then( m => m.PoductListPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
