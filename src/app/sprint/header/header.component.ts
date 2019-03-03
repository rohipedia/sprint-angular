import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  description: String = `Sprint Corporation is an American telecommunications company that provides
  wireless services and is an internet service provider. It is the
  fourth-largest mobile network operator in the United States and serves 54
  million customers as of October 2017. The company is headquartered in Overland Park, Kansas. In July 2013, a
  majority of the company was purchased by Japanese telecommunications company
  SoftBank Group Corp., although the remaining shares of the company continue
  to trade on the New York Stock Exchange.`;

  constructor() {}

  ngOnInit() {}

  
}
