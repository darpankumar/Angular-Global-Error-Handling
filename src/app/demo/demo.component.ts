import { Component, OnInit } from "@angular/core";
import { RestHandlerService } from "../services/rest-handler.service";

@Component({
  selector: "app-demo",
  templateUrl: "./demo.component.html",
  styleUrls: ["./demo.component.scss"]
})
export class DemoComponent implements OnInit {
  constructor(private restService: RestHandlerService) {}

  ngOnInit() {}

  generateClientError() {
    // try {
    //   let a = null;
    //   a.toString();
    // } catch (error) {
    //   console.log(error);
    // }

    //This is done to produce error.
    let a = null;
    a.toString();
  }

  generateBackendError() {
    // replace the url with service you want to use
    this.restService.get("http://localhost:8080/get").subscribe(data => {
      console.log("data is", data);
    });
  }
}
