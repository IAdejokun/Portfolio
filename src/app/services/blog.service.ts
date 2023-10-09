import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BlogService {


  constructor( private http:HttpClient ) { }

  baseUrl = `https://dev.to/api`;

  getUserArticles():Observable<any>{
    return this.http.get(`${this.baseUrl}/articles?username=a_denzel_`)
  }
}
