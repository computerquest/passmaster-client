import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthenticationService} from './services/authentication.service';
import {PassmasterService} from './services/passmaster.service';
import {AdminDashComponent} from "./admin-dash/admin-dash.component";
import {RoutingModule} from "./routing.module";
//import { MaterializeModule } from "angular2-materialize";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    //MaterializeModule
  ],
  providers: [
    AuthenticationService,
    PassmasterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

