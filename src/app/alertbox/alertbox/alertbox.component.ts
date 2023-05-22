import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.css']
})
export class AlertboxComponent {
  dialogData: any;
  title: any;
  message: any;

  constructor(public dialogRef:MatDialogRef<AlertboxComponent>, @Inject(MAT_DIALOG_DATA) public data:any){
      this.dialogData= data,
      this.title=data.title;
      this.message=data.message;
  }
  Confirm(){
     this.dialogRef.close(true)
  }
}
