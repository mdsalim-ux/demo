import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../services/toaster/toaster.service';
import { TransationModule } from '../services/transation/transation.module';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailFormControl!:FormGroup
  msg: any;

constructor(private formBuilder:FormBuilder,
  private _dialogRef:MatDialogRef<any>,
  private _notification:ToasterService,
  private _translate:TransationModule,
  private http:HttpClient){
}


  ngOnInit(): void {
    this.emailFormControl=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    }) 
   }

   onClick(){
    this.emailFormControl.markAllAsTouched()
    if(this.emailFormControl.valid){
      this._notification.success(this._translate.getTranslatelang('Sign-Up Successfully'),'')
      this._dialogRef.close(true);
       let url="https://localhost:1234/api/Student/GetStudents"
       this.http.get(url).subscribe(res=>{
        console.log(res,'res')
       });
      }
    else{
      this._notification.error(this._translate.getTranslatelang('Please enter the User Name or Password'),'')
      return
    }
  }

}
