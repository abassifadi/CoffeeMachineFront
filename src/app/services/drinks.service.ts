import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Drink from '../models/drink.model';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private BASE_API_URL = 'https://localhost:44313/api/Drinks';

  constructor(private _http: HttpClient) { }

  public getDrinks(){
       return this._http.get<Array<Drink>>(this.BASE_API_URL);
  }

}
