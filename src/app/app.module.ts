import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ReactComponentDirective } from './react-component.directive';
import { FeatureOverflowComponent } from './feature-overflow/feature-overflow.component';
import { ProximityConnectComponent } from './proximity-connect/proximity-connect.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent, FeatureOverflowComponent, ProximityConnectComponent],
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
