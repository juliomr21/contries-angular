import { Component, Input, OnInit } from '@angular/core';
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
 DBcontry:contt[] = [];
 DBmatrix:contt[] = [];
 Region: any = ['Africa','Americas','Asia','Europe', 'Oceania','All' ];
 region:string='';
 pais:string = '';
 DB:any = [];
 noContry = false;
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
  
  var Miurl = 'https://restcountries.com/v3.1/all';
  this.servicehttp.get(Miurl).subscribe(res => {this.DB = res;
    this.generateDB();
  
  });
  this.tema=this.servicehttp.get_color();
  
  }
  generateDB(){
    let N = this.DB.length;
   
    for(let i = 0; i < N; i++)
    { var aux:contt = {flag:[],name:"",population:0,capital:[],region:"",cca3:""};
      aux.name = this.DB[i].name.common;
      aux.capital = this.DB[i].capital;
      aux.flag = this.DB[i].flags.png;
      aux.population = this.DB[i].population;
      aux.region = this.DB[i].region;
      aux.cca3 = this.DB[i].cca3;
      this.DBmatrix.push(aux);
      this.DBcontry.push(aux);

    }
   
  }
 search_by_region(){
  this.region = this.form.value.region;
  this.pais = this.form.value.pais;
  if(this.pais != "")
  {
    this.search_by_contry();
    return;
  }
  if(this.region == "All"||this.region == "")
  this.DBcontry = this.DBmatrix;
  else
  this.DBcontry = this.DBmatrix.filter(contry => contry.region == this.region);

 }
 search_by_contry(){
  this.pais = this.form.value.pais;
  this.region = this.form.value.region;
  if(this.pais == "")this.search_by_region();
  
  {
    this.DBcontry = this.DBmatrix.filter(contry => { 
      if(contry.name.toLocaleUpperCase().includes(this.pais.toLocaleUpperCase()) && (contry.region == this.region || this.region == "All" || this.region ==""))return true;
        else return false;
    });
  }
  if(this.DBcontry.length == 0)this.noContry = true;
  else this.noContry = false;
  

 }
 micolor(){
  this.servicehttp.set_color(this.tema);
 }
}
interface contt{
  flag: any,
  name: string,
  population: number,
  region: string,
  capital: [],
  cca3: string
}