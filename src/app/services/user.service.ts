import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_API_URL = 'https://localhost:44313/api/MachineUser';

  constructor(private _http: HttpClient) { }

   public signInUser(login : string ){
      return this._http.get(this.BASE_API_URL+'?identifier='+login)
   }
}
