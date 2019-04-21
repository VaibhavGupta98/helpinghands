import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }

  onSignup(signupForm)
  {
    this.route.navigate(['/logingen']);
  }

}