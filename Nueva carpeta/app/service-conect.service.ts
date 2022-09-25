import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ServiceConectService {

  constructor(private http: HttpClient) { }

 get(url:string){
  
  
  return this.http.get(url);
 }

}
