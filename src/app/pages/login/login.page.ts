import { Component, OnInit } from '@angular/core';
import {StorageService}  from 'src/app/services/storage.service'
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { AuthConstant } from 'src/app/config/auth-constant';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authservice:AuthService
              ,private storageServie:StorageService
              ,private router:Router) { }

  ngOnInit() {
  }

  public postData={
    dCID:'',
    password:''
  };

  validateInputs(){
    let licenseNo=this.postData.dCID;
    let password=this.postData.password;
    return (this.postData.dCID &&this.postData.password && licenseNo.length>0 && password.length>0);
  }

  async actionLogin(){
  if(this.validateInputs){
        this.authservice.login(this.postData).subscribe((res=>{
        if(res.status=='1'){
          this.router.navigate(['/home']);
        }
        else{
          this.router.navigate(['/login']);
        }
      }));
    }
  }

  async registration(){
    this.router.navigate(['/signup']);
  }
}
