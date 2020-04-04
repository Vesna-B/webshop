import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { ProductService } from "../product.service";
import { Product } from "../product";

import { of, Observable } from "rxjs";
import { filter, tap, switchMap } from "rxjs/operators";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  // @Input() product: Product;
  product: Observable<Product>;

  constructor(
    private _router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    //this.productService.getProducts().subscribe(value =>  this.product = value);  //returns list

    this.product = this.productService.getProducts().pipe(
      switchMap(productList => {
        return of(productList.find(product => product.id === id));
      })
    );
  }
}
