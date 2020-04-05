import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {StorageService} from '../services/storage.service';
import {ToastController} from '@ionic/angular';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storageService:StorageService
    ,private toastController: ToastController,private httpService:HttpService) {}

  public passengerDetails={
    passengerName:''
    ,pCID:''
    ,pContact:''
    ,presentAddress:''
    ,enterDate:''
}

   async savePassengerReg(){
     const toast=await this.toastController.create({
        position:'middle'
      ,buttons:[{text:'Ok',role:'cancel'}]
    })
    this.httpService.savePassengerLog(this.passengerDetails)
    .subscribe((res:any)=>{
    toast.message=res.msg;
    if(res.status=='1'){
     this.passengerDetails={
        passengerName:''
        ,pCID:''
        ,pContact:''
        ,presentAddress:''
        ,enterDate:''
      }
      toast.present();
    }
    else{
      toast.message='Error in saving.',
      toast.present();
    }
   });
  }
  
}
