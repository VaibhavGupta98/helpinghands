import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-stationery',
  templateUrl: './stationery.component.html',
  styleUrls: ['./stationery.component.css']
})
export class StationeryComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }

  onSignup(signupForm)
  {
    this.route.navigate(['/options']);
  }

}
