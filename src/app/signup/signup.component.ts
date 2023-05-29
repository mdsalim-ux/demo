import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToasterService } from '../services/toaster/toaster.service';
import { TransationModule } from '../services/transation/transation.module';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  emailFormControl!:FormGroup
  msg: any;

constructor(private formBuilder:FormBuilder,private _notification:ToasterService,private _translate:TransationModule){
  
}


  ngOnInit(): void {
    this.emailFormControl=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]

    }) 
   }

   onClick(){

    if(    this.emailFormControl.valid      ){
      this.msg=(this._translate.getTranslatelang('Pas'))
      this._notification.error(this._translate.getTranslatelang('Pas'),'')
      this._notification.info(this._translate.getTranslatelang('Pas'),'')
  
      this._notification.success(this._translate.getTranslatelang('Pas'),'')
  
      this._notification.warning(this._translate.getTranslatelang('Pas'),'')
  
      console.log( this.emailFormControl.valid,'Check Status')
    }
    else{
      return
    }
  }

}
