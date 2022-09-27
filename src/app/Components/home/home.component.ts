import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceConectService } from '../../service-conect.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tema ={
    "background-color": "hsl(0, 100%, 100%)",
    "color": "black"
  }
 DBcontry:any = [];
 Region: any = ['Africa','America','Asia','Europe', 'Oceania' ];
 region:string='';
 pais:string = 'xxx';
 public form: FormGroup;
  constructor(private servicehttp:ServiceConectService,private formbuilder:FormBuilder) { 
    this.form = this.formbuilder.group({
      pais: '',
      region: ''
    })

    servicehttp.cambio.subscribe(res => this.tema = res);
    
  }
 
  
  ngOnInit(): void {
    this.form = this.formbuilder.group({
      pais: '',
      region: ''
    })
    //this.micolor();

    var Miurl = 'https://restcountries.com/v3.1/all';
  this.servicehttp.get(Miurl).subscribe(res => {this.DBcontry = res; console.log(res)});
  this.tema=this.servicehttp.get_color();
  console.log(this.tema);
  
   // this.nn = this.DBcontry.name;
  // console.log(this.tema);
  }
 fun(){
  this.region = this.form.value.region;
  var Miurl = `https://restcountries.com/v3.1/region/${this.region}`;
  this.servicehttp.get(Miurl).subscribe(res => {this.DBcontry = res; console.log(res)});
 }
 fun2(){
  
  this.pais = this.form.value.pais;
  var Miurl = `https://restcountries.com/v3.1/name/${this.pais}`;
  this.servicehttp.get(Miurl).subscribe(res => {this.DBcontry = res; console.log(res)});
  console.log(this.pais)
 }
 micolor(){
  this.servicehttp.set_color(this.tema);
 }
}
