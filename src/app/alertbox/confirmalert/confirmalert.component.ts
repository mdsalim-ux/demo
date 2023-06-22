import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmalert',
  templateUrl: './confirmalert.component.html',
  styleUrls: ['./confirmalert.component.css']
})
export class ConfirmalertComponent {
  dialogData: any;
  title: any;
  message: any;

  constructor(public dialogRef:MatDialogRef<ConfirmalertComponent>, @Inject(MAT_DIALOG_DATA) public data:any){
      this.dialogData= data,
      this.title=data.title;
      this.message=data.message;
  }

  ConfirmYes(){
     this.dialogRef.close(true)
  }
  ConfirmNo(){
    this.dialogRef.close(false)
 }
}
