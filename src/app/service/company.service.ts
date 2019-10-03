import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = ;
  constructor(private _http:HttpClient) { }
  getCompany(){


    return this._http.post(`${this.url}`,{
      'ID':'1'


    });
  }
}
