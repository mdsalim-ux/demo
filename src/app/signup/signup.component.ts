import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../services/toaster/toaster.service';
import { TransationModule } from '../services/transation/transation.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailFormControl!:FormGroup
  msg: any;

constructor(private formBuilder:FormBuilder,
  private _notification:ToasterService,
  private _translate:TransationModule,
  private http:HttpClient,
  private router:Router){
}


  ngOnInit(): void {
    this.emailFormControl=this.formBuilder.group({
      name:['',Validators.required],
      MobileNumber:['',Validators.required]
    }) 

    this.getStudents();
   }

   onClick(){
    this.emailFormControl.markAllAsTouched()
    if(this.emailFormControl.valid){
      this._notification.success(this._translate.getTranslatelang('Sign-Up Successfully'),'')
      let url="https://localhost:1234/api/Student/SavingStudents"
      this.http.post(url,this.emailFormControl.value).subscribe((res: any)=>{
        this.getStudents();
      })
      }
    else{
      this._notification.error(this._translate.getTranslatelang('Please enter the User Name or Password'),'')
      return
    }
  }
   getStudents(){
    let url="https://localhost:1234/api/Student/GetStudents"
       this.http.get(url).subscribe((res: any)=>{
       });
   }
   onLogin(){
    this.router.navigate(['login'])
   }
}
