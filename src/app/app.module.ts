import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactComponentDirective } from './react-component-directive';
import { HelloWorldComponent } from './hello-world/hello-world.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactComponentDirective,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
