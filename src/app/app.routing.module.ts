import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DialogBoxComponent } from "./dialog-box/dialog-box.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { HeaderComponent } from "./header/header.component";
import { AuthGuard } from "./Auth-Guard/auth.service";

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full',data:{breadcrumb:'Home'}},
    { path: 'dialog', component: DialogBoxComponent },
    { path: 'header', component: HeaderComponent,canActivate:[AuthGuard],data:{breadcrumb:'Header'}},
    {path:'login',component:LoginComponent},
    {path:'sign',component:SignupComponent,data:{breadcrumb:'Sign-Up'}}

];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule]
})
// data: { breadcrumb: 'Home' }
export class AppRoutingModule { }



