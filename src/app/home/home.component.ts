import { Component, OnInit, OnDestroy } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";

import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit, OnDestroy {
  products: Product[];
  destroy$: Subject<void> = new Subject<void>();

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  ngOnChanges() {}
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();

    //this.destroy$.subscribe();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe(products => (this.products = products));
  }
}
