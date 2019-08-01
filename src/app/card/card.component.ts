import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() product: Product;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.product.description =
      this.product.description.substring(0, 100) + "...";
    //this.fixPrice();
  }

  // fixPrice(): void {
  //   this.product.price = +this.product.price.toFixed(2);
  // }

  byProduct(): void {
    this.productService.byProduct(this.product); //call function from service
  }
}
