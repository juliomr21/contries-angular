import { ServiceConectService } from './../../service-conect.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contry-detail',
  templateUrl: './contry-detail.component.html',
  styleUrls: ['./contry-detail.component.css']
})
export class ContryDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private servicehttp:ServiceConectService) { }
 DBcontry:any = [];
//{"name":{"common":"Guatemala4","official":"Republic of Guatemala4","nativeName":{"spa":{"official":"República de Guatemala4","common":"Guatemala4"}}},"region":"America","capital":["Guatemala4 City"], "population":103,"flags":{"png":"assets/tc.png","svg":"https://flagcdn.com/gt.svg"}}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      this.cargaData(params.variable)
    })

  }
  cargaData(id: string) {
    var Miurl = `https://restcountries.com/v3.1/name/${id}`;
    //  this.servicehttp.get(`https://restcountries.com/v3.1/name/${id}`).subscribe(res => this.contry = res)
    this.servicehttp.get(Miurl).subscribe(res => {this.DBcontry = res; console.log(this.DBcontry)});
  }


}
