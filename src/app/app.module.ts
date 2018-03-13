import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PagenotfoundModule } from './pagenotfound/pagenotfound.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    PagenotfoundModule,
    HomeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
