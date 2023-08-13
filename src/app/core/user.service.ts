import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, IRefreshToken, IRegister } from '../common/interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user : any;
  constructor(private http:HttpClient) { }
  login(user:ILogin){
    return this.http.post<any>('',user);
  }
  register(user:IRegister){
    return this.http.post<any>( 'User/register',user);
  }
  refreshToken(user:IRefreshToken){
    return this.http.post<any>( 'User/refToken',user);
  }
  getJwtToken(){
    let user = localStorage.getItem('user') as string;
    this.user = JSON.parse(user);
    return this.user !=null?this.user.token:null;
  }
  getrefreshToken(){
    let user = localStorage.getItem('user') as string;
    this.user = JSON.parse(user);
    return this.user !=null?this.user.refreshToken:null;
  }
  getUser(){
    let user = localStorage.getItem('user') as string;
    this.user = JSON.parse(user);
    return this.user !=null?this.user:null;
  }
  removeJwtToken(){
    localStorage.removeItem('user');
  }
  storeJwtToken(jwtToken:string){
    localStorage.setItem("JWT_TOKEN",jwtToken)
  }
  
}