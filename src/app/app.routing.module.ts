import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DialogBoxComponent } from "./dialog-box/dialog-box.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";

const routes: Routes = [
    { path: '', redirectTo: 'dialog', pathMatch: 'full' },
    { path: 'dialog', component: DialogBoxComponent },
    {path:'login',component:LoginComponent},
    {path:'Sign',component:SignupComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes,{useHash:true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }



