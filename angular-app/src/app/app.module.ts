import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomModuleModule} from './custom-module/custom-module.module';
import { CustomDirectiveDirective } from './custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
