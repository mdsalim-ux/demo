import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-module/angular-module.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { LoaderComponent } from './loader/loader.component';
import { TransationModule } from './services/transation/transation.module';
import { SignupComponent } from './signup/signup.component';
import { ToastrModule } from 'ngx-toastr';
import { AlertboxComponent } from './alertbox/alertbox/alertbox.component';
import { AlertboxModule } from './alertbox/alertbox/alertbox.module';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ConfirmalertComponent } from './alertbox/confirmalert/confirmalert.component';
import { ConfirmalertModule } from './alertbox/confirmalert/confirmalert.module';






@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    LoaderComponent,
    SignupComponent,
    AlertboxComponent,
    ConfirmalertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TransationModule,
    AlertboxModule,
    ConfirmalertModule,
    ToastrModule.forRoot({
    })
  ],
  providers: [ LoaderComponent],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
