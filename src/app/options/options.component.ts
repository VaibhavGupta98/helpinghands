import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  donatorDetail:any


  constructor(private router: Router,private route: ActivatedRoute) { }

  onMedicineClick(){
    this.router.navigate(['/medicines'],{
      queryParams: {Donatordata: this.donatorDetail.firstName }
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.donatorDetail= JSON.parse(params.data1);
      console.log(this.donatorDetail.firstName)
    })
  }

}
