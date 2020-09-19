import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  base_url:string = `https://jsonplaceholder.typicode.com/posts`;

  getApi(){
    return this.http.get(this.base_url);
  }
}
