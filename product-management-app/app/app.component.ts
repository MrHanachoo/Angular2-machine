import {Component} from "angular2/core";

@Component({
  selector: "my-pm-app",
  template: `<div>
              <h1>{{pageTitle}}</h1>
              <div>my first component :D</div>
            </div>`
})

export class AppComponent {
  pageTitle: String = "My Product Management App";
}
