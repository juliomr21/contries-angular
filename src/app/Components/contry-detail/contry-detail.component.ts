import { ServiceConectService } from './../../service-conect.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contry-detail',
  templateUrl: './contry-detail.component.html',
  styleUrls: ['./contry-detail.component.css']
})
export class ContryDetailComponent implements OnInit {
  tema ={
    "background-color": "hsl(0, 0%, 100%)",
    "color": "black"
  }
  
  constructor(private route: ActivatedRoute, private servicehttp:ServiceConectService,private location:Location) {
    servicehttp.cambio.subscribe(res => this.tema = res);
   }
 DBcontry:any = [];
  ngOnInit(): void {
    this.tema=this.servicehttp.get_color();
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      this.cargaData(params.variable)
    })

  }
  cargaData(id: string) {
    var Miurl = `https://restcountries.com/v3.1/alpha/${id}`;
    this.servicehttp.get(Miurl).subscribe(res => {this.DBcontry = res;});
  }
  goBack(){
    this.servicehttp.set_color(this.tema);
 }

}

