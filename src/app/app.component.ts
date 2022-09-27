import { Component, Output,EventEmitter } from '@angular/core';
import { ServiceConectService } from './service-conect.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contries';
  tem = true;
  mode='Dark Mode'
  tema ={
    "background-color": "hsl(0, 0%, 100%)",
    "color": "black"
  }
  fondo ={
    "background-color": "hsl(0, 0%, 100%)",
    "color": "black"
  }
  constructor(private servicehttp: ServiceConectService){this.servicehttp.cambio.emit(this.tema);}
  fun(){
    
    if(this.tem)
    {
      this.fondo['background-color'] = "hsl(207, 26%, 17%)";
      this.fondo.color= "white";
      this.tema['background-color'] = "hsl(209, 23%, 22%)";
      this.tema.color= "white";
      this.mode='Light Mode'
    }
    else
    {
      this.fondo['background-color'] = "hsl(0, 0%, 100%)";
      this.fondo.color= "black";
      this.tema['background-color'] = "hsl(0, 0%, 100%)";
      this.tema.color= "black";
      this.mode='Dark Mode'
    }
    this.servicehttp.cambio.emit(this.tema);
    this.tem = !this.tem
    
  }
}
