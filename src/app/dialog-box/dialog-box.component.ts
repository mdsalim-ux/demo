import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';
import { TransationModule } from '../services/transation/transation.module';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { SignupComponent } from '../signup/signup.component';
import { AlertboxModule } from '../alertbox/alertbox/alertbox.module';
import { ToasterService } from '../services/toaster/toaster.service';
import { ConfirmalertModule } from '../alertbox/confirmalert/confirmalert.module';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit  {
  showFiller = false;


  emailFormControl!:FormGroup
  suppLang=['en','hn']
  msg: any;
  constructor(private formBuilder:FormBuilder,
    private router:Router,
    private loader:LoaderComponent,
    public _translate:TranslateService,
    public translate:TransationModule,
    private dialog:MatDialog,
    public _dialog:AlertboxModule,
    public notification:ToasterService,
    public _confirm:ConfirmalertModule
    )
    {
      _translate.setDefaultLang('en')
    }

  ngOnInit(): void {

  }
  

  
    
 
}
