import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConectService } from '../../service-conect.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 DBcontry:any = [{"name":{"common":"Guatemala","official":"Republic of Guatemala","nativeName":{"spa":{"official":"República de Guatemala","common":"Guatemala"}}},"region":"America","capital":["Guatemala City"], "population":100,"flags":{"png":"assets/gt.png","svg":"https://flagcdn.com/gt.svg"}},
 {"name":{"common":"Guatemala2","official":"Republic of Guatemala2","nativeName":{"spa":{"official":"República de Guatemala2","common":"Guatemala2"}}},"region":"America","capital":["Guatemala2 City"], "population":101,"flags":{"png":"assets/ao.png","svg":"https://flagcdn.com/gt.svg"}},
 {"name":{"common":"Guatemala3","official":"Republic of Guatemala3","nativeName":{"spa":{"official":"República de Guatemala3","common":"Guatemala3"}}},"region":"America","capital":["Guatemala3 City"], "population":102,"flags":{"png":"assets/ph.png","svg":"https://flagcdn.com/gt.svg"}},
 {"name":{"common":"Guatemala4","official":"Republic of Guatemala4","nativeName":{"spa":{"official":"República de Guatemala4","common":"Guatemala4"}}},"region":"America","capital":["Guatemala4 City"], "population":103,"flags":{"png":"assets/tc.png","svg":"https://flagcdn.com/gt.svg"}}];
 Region: any = ['Africa','America','Asia','Europa', 'Ociania' ];
 //nn:any = []
  constructor(private servicehttp:ServiceConectService) { }

  ngOnInit(): void {
  this.servicehttp.get().subscribe(res => {this.DBcontry = res; console.log(res)});
  
   // this.nn = this.DBcontry.name;

  }
 fun(){}
}
