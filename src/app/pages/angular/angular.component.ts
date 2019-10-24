import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-angular",
  templateUrl: "angular.component.html"
})
export class AngularComponent implements OnInit {

  isCollapsed : boolean = true;

  constructor() {}

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit() {}

  changeLabelName(lbl, val) {
    document.getElementById(lbl).innerHTML = val;
  }  

}

