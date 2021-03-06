// angular
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule }      from '@angular/common';
import { HttpClientModule }      from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { PopoverModule } from 'ngx-bootstrap/popover';

// material
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatButtonModule } from "@angular/material/button";

// app
import { VakeanoAppComponent } from './vakeanoApp/vakeanoApp.component';
import { routes } from './vakeanoApp/vakeanoApp.component';

// applets
import { BlankPage } from './vakeanoApp/blankPage';
import { LoginComponent  } from './login/login.component';
import { SignUpComponent  } from './login/signUp.component';

// feature modules
import { FourDModule, JS44DModule, ModalModule } from 'js44d';
import { MGModule } from './moviegenome/mg.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

let routerModule = RouterModule.forRoot(routes);



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    ButtonsModule.forRoot(),
    PopoverModule.forRoot(),
    routerModule,
    MatButtonToggleModule, MatButtonModule,
    FourDModule, JS44DModule, ModalModule,
    MGModule,
    BrowserAnimationsModule
  ],
  declarations: [ VakeanoAppComponent, BlankPage, LoginComponent, SignUpComponent ],
  exports: [JS44DModule, ModalModule, MGModule ],
  entryComponents: [ LoginComponent, SignUpComponent ],
  bootstrap: [ VakeanoAppComponent ]
})

export class WebModule { }
