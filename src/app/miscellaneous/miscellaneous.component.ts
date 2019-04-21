import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }

  onSignup(signupForm)
  {
    this.route.navigate(['/options']);
  }
}
