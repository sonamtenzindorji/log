import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment' ;
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  
  savePassengerLog(data:any){
    const headers=new HttpHeaders();
    headers.append("Access-Control-Allow-Origin","http://localhost:8100");
    headers.append("Access-Control-Allow-Methods","POST")
    const options={headers:headers, withCredintials:true};
    const url=environment.apiUrl +"passenger/save";
     return this.http.post(url,data,options).pipe(map(res=>res));
  }

  signUp(data:any):Observable<any>{
    const headers=new HttpHeaders();
   // headers.append("Accept",'application/json');
    //headers.append("content-type",'application/json');
    headers.append("Access-Control-Allow-Origin","http://localhost:8100");
    headers.append("Access-Control-Allow-Methods","POST")
    const options={headers:headers, withCredintials:true};
    const url=environment.apiUrl +"passenger/signUp";

   return this.http.post(url,data,options)
    .pipe(map(res=>res));
  }

  public login(data:any):Observable<any>{
    const headers=new HttpHeaders();
    const options={headers:headers, withCredintials:false};
    const url=environment.apiUrl +"passenger/login";
    return this.http.post(url,data).pipe(map(res=>res));
  }
}
