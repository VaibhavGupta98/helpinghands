import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-loginngo',
  templateUrl: './loginngo.component.html',
  styleUrls: ['./loginngo.component.css']
})
export class LoginngoComponent implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
  }

  onLogin(loginForm)
  {
    this.route.navigate(['/options']);
  }

  
}
