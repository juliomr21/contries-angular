import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ServiceConectService {

  constructor(private http: HttpClient) { }
  @Output() cambio = new EventEmitter();
  tema = {
    "background-color": "hsl(0, 100%, 100%)",
    "color": "black"
  }

  private color = true;
  get(url: string) {

    return this.http.get(url);
  }
  set_color(xx: any) {
    this.tema['background-color'] = xx['background-color'];
    this.tema.color = xx.color;
  }
  get_color() {
    return this.tema;
  }

}
interface tem {
  "background-color": "hsl(0, 100%, 100%)",
  "color": "black"
}