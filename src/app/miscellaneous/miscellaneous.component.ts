import { Component, OnInit } from '@angular/core';
import { Route, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-miscellaneous',
  templateUrl: './miscellaneous.component.html',
  styleUrls: ['./miscellaneous.component.css']
})
export class MiscellaneousComponent implements OnInit {

  donatorDetail: any

  donorName: String

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.donatorDetail= JSON.parse(params.Donatordata)
      this.donorName = this.donatorDetail.firstName

      //console.log(this.donatorDetail)
      console.log(this.donorName)
  })}

  onSignup(signupForm)
  {
    this.router.navigate(['/options']);
  }
}
