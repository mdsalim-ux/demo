import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  toastrSetting: any;

  constructor( private notification:ToastrService) {
     this.toastrSetting={
      timeOut:7000,
      progressBar:true,
      preventDuplicate:false,
      limit:3,
      Animation:'fade'
     }
   }
   
 
   success(message:string,title:string){
    this.notification.success(message,title,this.toastrSetting)
   }
   error(message:string,title:string){
    this.notification.error(message,title,this.toastrSetting)
   }
   info(message:string,title:string){
    this.notification.info(message,title,this.toastrSetting)
   }
   warning(message:string,title:string){
    this.notification.warning(message,title,this.toastrSetting)
   }
}
