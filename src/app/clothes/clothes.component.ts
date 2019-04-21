import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }
  onSignup(signupForm)
  {
    this.route.navigate(['/options']);
  }
}