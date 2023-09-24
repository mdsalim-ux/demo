import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { LoaderService } from '../loader/loader.service';
import { SharedDataService } from '../services/shared-data/shared-data.service';
import { DarkModeService } from '../common/dark-mode/dark-mode.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  LoginFormControl!:FormGroup
  loginData: any;
  prefersDark: boolean=false;

constructor(private formBuilder:FormBuilder,
  private http:HttpClient,
  private router:Router,
  private loaderService:LoaderService,
  private sharedService:SharedDataService,
  private themeService:DarkModeService){
  this.LoginFormControl=this.formBuilder.group({
    name:['',Validators.required],
    MobileNumber:['',Validators.required]
  }) 
  
  this.getStudents()
  this.themeService.toggleDarkMode();
  this.themeService.setAutoMode();
  // this.prefersDark=this.sharedService.checkPrefersDark();
 
  }


  getStudents(){
    let url="https://localhost:1234/api/Student/GetStudents"
       this.http.get(url).subscribe((res: any)=>{
        this.loginData=res
       });
   }

  onLogin(){
    this.LoginFormControl.markAllAsTouched();
    if(this.LoginFormControl.valid){
     for(let i=0; i<this.loginData.length; i++){
      if(this.LoginFormControl.value.name==this.loginData[i].name && this.LoginFormControl.value.MobileNumber==this.loginData[i].mobileNumber ){
        this.router.navigate(['/header'])
        localStorage.setItem('LoggedIn','true');
        const matchedUser = this.loginData[i];
        this.sharedService.updateBasedOnKey('matchedUser',matchedUser)
        this.sharedService.updateBasedOnKey('LoggedIn','false');
        break;
      }
      else{
        localStorage.setItem('LoggedIn','false');
        //this.sharedService.updateBasedOnKey("localLogin",false)
      }
      
     } 
    }
  }
  onSign(){
    this.router.navigate(['/sign'])
  }
}
