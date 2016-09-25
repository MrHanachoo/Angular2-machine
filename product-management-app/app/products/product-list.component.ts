import {Component, OnInit} from "angular2/core";
import {IProduct} from "./product";
import {ProductFilterPipe} from "./product-filter.pipe";
import {ProductService} from "./product.service";
@Component({
  selector: "my-pm-products",
  templateUrl : "app/products/product-list.component.html",
  styleUrls: ["app/products/product-list.component.css"],
  pipes: [ProductFilterPipe]
})

export class ProductListComponent implements OnInit{
  pageTitle: string = "** PRODUCT LIST **";
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = "";
  products: IProduct[] = [];

  constructor(private _productService: ProductService){

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();
  }
}
