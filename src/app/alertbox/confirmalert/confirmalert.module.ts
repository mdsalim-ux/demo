import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ConfirmalertComponent } from './confirmalert.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ConfirmalertModule { 
  constructor( public dialog:MatDialog ){

  }

  OpenConfirmAlert(input:any, width:any):Observable<any> {
    const dialogRef=this.dialog.open(ConfirmalertComponent,{
      width:width,
      autoFocus:false,
      data:input,
      disableClose:true
    });
    return dialogRef.afterClosed()
  }
}
