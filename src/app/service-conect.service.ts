import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceConectService {

  constructor(private http: HttpClient) { }

 get(){
  var Miurl = 'https://restcountries.com/v3.1/all';
  var fil = 'https://restcountries.com/v3.1/name/united'
  return this.http.get(Miurl);
 }

}
