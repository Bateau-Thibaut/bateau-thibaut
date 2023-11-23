import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(private httpClient: HttpClient) { }

  getProduitList(){
    return this.httpClient.get("http://51.255.166.155:1352/tig/products/");
  }
}
