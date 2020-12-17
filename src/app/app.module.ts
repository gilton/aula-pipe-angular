import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqrtPipe } from './shared/pipes/sqrt.pipe';
import { ExtensionDatePipe } from './shared/pipes/extension-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    ExtensionDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
