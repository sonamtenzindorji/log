import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import { from } from 'rxjs';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor( private httpService:HttpService
    ,private toastController:ToastController) { }
  ngOnInit() {
  }

  public signUpDetails={
    dCID:'',
    licenseNo:'',
    password:'',
    driverContactNo:''
  }
  async signUp(){
    const toast=await this.toastController.create({
      position:'middle'
    ,buttons:[{text:'Ok',role:'cancel'}]
  })
    this.httpService.signUp(this.signUpDetails)
    .subscribe((res:any)=>{
      toast.message=res.msg;
      if(res.status=='1'){
       this.signUpDetails={
        dCID:'',
        licenseNo:'',
        password:'',
        driverContactNo:''        }
        toast.present();
      }
      else{
        toast.message='Error in saving.',
        toast.present();
      }
     });
  }

}
