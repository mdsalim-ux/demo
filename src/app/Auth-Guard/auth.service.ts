import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  implements CanActivate {

  constructor(private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean>{
    return this.isLogged().pipe(
      tap((isLooged)=>{
        if(!isLooged){
          this.router.navigate(['/login'])
        }
      })
    )
  }
  isLogged():Observable<boolean>{
    let isLogged:any
    if(localStorage['LoggedIn']=='true'){
      isLogged=localStorage['LoggedIn']=true
    }
    else{
      isLogged=localStorage['LoggedIn']=false
    }
    return of(isLogged)
  }
}
