import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, of } from "rxjs";
import { tap } from "rxjs/operators";
import { Product } from "./product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  productUrl = "./assets/products.json";
  totalPrice = 0; //total price in CartComponent
  products: Product[];

  private _cartPrice$: Subject<number> = new Subject(); // make _cartPrice$ observable, so we can subscribe on it in headerComponent
  get cartPrice$() {
    return this._cartPrice$.asObservable();
  }

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.productUrl)
      .pipe(tap(productList => (this.products = productList)));
    // .subscribe(value => console.log(value));
    // return this.http.get<Product[]>(this.productUrl);
  }

  //I don't need this
  // getProduct(): Observable<Product[]> {
  //   // vrati observable - listu svih producta
  //   return this.http.get<Product[]>(this.productUrl);
  // }

  byProduct(product: Product): void {
    this.totalPrice += product.price;
    this._cartPrice$.next(this.totalPrice); //value inside next() is sent to HeaderComponent
  }
}
