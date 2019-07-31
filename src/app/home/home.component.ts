import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  products: Product[];
  //p = [1, 2, 3, 4];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService
      .getProducts()
      .subscribe(products => (this.products = products));
  }
}
