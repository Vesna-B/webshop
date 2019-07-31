import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../product";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit() {
    this.product.description =
      this.product.description.substring(0, 100) + "...";
    //this.fixPrice();
  }

  // fixPrice(): void {
  //   this.product.price = +this.product.price.toFixed(2);
  // }
}
