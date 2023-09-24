import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { HttpClient } from '@angular/common/http';
import { enviromentDev } from '../environments/environmentsDev.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  private idleTimeout:number=enviromentDev.timeout *5;
  private idleSec:number=0;

constructor(private dialog:MatDialog,private http:HttpClient ){
  
            
}

ngOninit(){
  setInterval(()=>{
    this.checkidleTimer()
  },1000)
}
resetidleTimer(){
  this.idleSec= 0 ;
}

checkidleTimer(){
  if(this.idleSec >=this.idleTimeout){

  }
  else{
    this.idleSec +=1
  }
}
  ngDoCheck(){
    this.checkidleTimer()
  }
  @HostListener('document:mousemove')
  onMouseMove() {
   this.resetidleTimer()
  }
  @HostListener('document:keypress')
  onKeyPress() {
    this.resetidleTimer()
  }
  @HostListener('document:touchstart')
  onTouchStart() {
    this.resetidleTimer()
  }
  @HostListener('document:touchmove')
  onTouchMove() {
    this.resetidleTimer()
  }
  @HostListener('document:click')
  onClick() {
    this.resetidleTimer()
  }
  @HostListener('document:scroll')
  onScroll() {
    this.resetidleTimer()
  }
  @HostListener('document:ontouchmove')
  onDocumentTouchMove() {
    this.resetidleTimer()

  }
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    this.resetidleTimer()
  }
}
