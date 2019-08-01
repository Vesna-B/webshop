import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { Product } from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  productUrl = "./assets/products.json";
  totalPrice = 0; //total price in CartComponent
  private _cartPrice$: Subject<number> = new Subject();
  get cartPrice$() {
    return this._cartPrice$.asObservable();
  }

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl);
  }

  byProduct(product: Product): void {
    this.totalPrice += product.price;
    this._cartPrice$.next(this.totalPrice); //value inside next() is sent to HeaderComponent
  }
}
