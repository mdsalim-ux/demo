import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
 private baseData =new BehaviorSubject({})
 baseDataObs=this.baseData.asObservable()
 private data:{[key:string]:any}={
  "User":[],
  "Show":true,
 }
  constructor() { }


updateBasedOnKey(key:string,value:any){
  this.data[key]=value
  this.baseData.next(this.data);
}
checkPrefersDark(): boolean {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
}