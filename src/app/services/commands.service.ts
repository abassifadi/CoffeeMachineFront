import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Command from '../models/command.model';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {

constructor(private _http: HttpClient) { }

private BASE_API_URL = 'https://localhost:44313/api/Commands';
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin' : "*",
    'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, DELETE',
    'Access-Control-Max-Age' : '3600',
    'Access-Control-Allow-Headers' : 'Content-Type, Origin, Cache-Control, X-Requested-With',
    'Access-Control-Allow-Credentials' :  'true'
  })
};
public registerCommand(command : Command ) {
     return this._http.post(this.BASE_API_URL,command,this.httpOptions);
}

public getCommandsForUser( userIdentifier : string){
  return this._http.post(this.BASE_API_URL,this.httpOptions);
}

}
