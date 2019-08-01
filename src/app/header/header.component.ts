import { Component, OnInit, Input } from "@angular/core";
import { ProductService } from "../product.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Input() totalPriceInCart = 0;
  _subjectTotalPriceInCart;

  constructor(private productService: ProductService) {
    this._subjectTotalPriceInCart = this.productService.cartPrice$.subscribe(
      value => (this.totalPriceInCart = value) //value is the value that we send through the next
    );
  }

  ngOnInit() {
    this.totalPriceInCart = this.productService.totalPrice;
  }
}
