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
    this.dropdownchange(event);
    this.emailFormControl=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]

    })


  }
  showLoader(){
  this.loader.loading.next(true)
  }
  onClick(){
    this.emailFormControl.valid
    this.msg=this.translate.getTranslatelang('Spinner')
    console.log( this.emailFormControl.valid,'Check Status')
  }
  onTabChange(event:any){
    console.log(event,'event')
    if(event.index==1){
      this.router.navigate(['/login'])
    }
    if(event.index==2){
      this.router.navigate(['/Sign'])
    }
  }
  dropdownchange(event:any){
    if(event!=undefined){
      this._translate.setDefaultLang(event.value)

    }
  }

  openDialog() {
    // let input={'title':this.translate.getTranslatelang('Info'),message:[this.translate.getTranslatelang('Inform')]}
    // this._dialog.OpenAlert(input,'450px')
    let input = { 'title': this.translate.getTranslatelang('Info'), message: [this.translate.getTranslatelang('Inform')] }
    this._confirm.OpenConfirmAlert(input, '450px').subscribe(result => {
      if (result) {
       this.notification.error(this.translate.getTranslatelang('Inform'),'')
      }
      else {
        return
      }
    })
    
    // const dialogRef = this.dialog.open(SignupComponent);
    
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    
    // });
  }
    
 
}
