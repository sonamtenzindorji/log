import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {StorageService} from './storage.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpService
    ,private storageService:StorageService) { }

public login(postDate:any):Observable<any>{
    return this.httpService.login(postDate);
    };

    //logout(){
      //this.storageService.

   }
