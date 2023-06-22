import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AlertboxComponent } from './alertbox.component';
import { Observable } from 'rxjs';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AlertboxModule {

  constructor( public dialog:MatDialog ){

  }

  OpenAlert(input:any, width:any):Observable<any> {
    const dialogRef=this.dialog.open(AlertboxComponent,{
      width:width,
      autoFocus:false,
      data:input,
      disableClose:true
    });
    return dialogRef.afterClosed()
  }

 }
