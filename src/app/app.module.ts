import { CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-module/angular-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HeaderComponent } from './header/header.component';
import { LoaderService } from './loader/loader.service';
import { PrimengModule } from './angular-module/primeng/primeng.module';
import { TableModule } from 'primeng/table';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { TokenInterceptor } from './core/token-interceptor.service';
import { AgGridModule } from 'ag-grid-angular';
import { LoginComponent } from './login/login.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BreadcrumbModule } from 'xng-breadcrumb';

export function TranslateLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json")
}




@NgModule({
  declarations: [
    AppComponent,
    DialogBoxComponent,
    LoaderComponent,
    SignupComponent,
    AlertboxComponent,
    ConfirmalertComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TransationModule,
    AlertboxModule,
    FormsModule,
    TableModule,
    PrimengModule,
    ConfirmalertModule,
    AgGridModule,
    BreadcrumbModule,
    ToastrModule.forRoot({
    })
  ],
  providers: [LoaderComponent,LoaderService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
