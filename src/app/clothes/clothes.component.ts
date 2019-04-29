import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Clothes } from 'models/clothes';
import { ClothesService } from 'services/clothes.service';
@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {

  donatorDetail: any

  donorName: String

  clothesModel: any

  constructor(private router: Router,private route: ActivatedRoute, private _clothesService: ClothesService) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params)=>{
      //console.log(params);
      this.donatorDetail= JSON.parse(params.Donatordata)
      this.donorName = this.donatorDetail.firstName

      this.clothesModel = new Clothes(this.donatorDetail.firstName,
        this.donatorDetail.lastName,
        this.donatorDetail.email,
        this.donatorDetail.address,
        this.donatorDetail.contact,
        this.donatorDetail.uname,
        '','','','');

        console.log(this.clothesModel)

      //console.log(this.donatorDetail)
      console.log(this.donorName)
  })}


  onClothesFormSubmit(){
    this._clothesService.postFormData(this.clothesModel)
    .subscribe(
      data=> console.log('Clothes Form submitted ',data),
      error => console.error(error)
      
    )
  }


  onSignup(signupForm)
  {
    this.router.navigate(['/options']);
  }
}