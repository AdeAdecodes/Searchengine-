import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  url = 'https://ojatee.herokuapp.com/api/v1/company';
  constructor(private _http:HttpClient) { }
  getCompany(){
    return this._http.get(`${this.url}`);
  }
}
