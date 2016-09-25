import {Component} from "angular2/core";
import {ProductListComponent} from "./products/product-list.component";
import {ProductService} from "./products/product.service";

@Component({
  selector: "my-pm-app",
  template: `<div>
              <h1>{{pageTitle}}</h1>
              <my-pm-products>my first component :D</my-pm-products>
            </div>`,
  directives: [ProductListComponent],
  providers: [ProductService]

})


export class AppComponent {
  pageTitle: String = "My Product Management App";
}
