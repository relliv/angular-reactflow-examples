import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureOverflowComponent } from './feature-overflow/feature-overflow.component';
import { ProximityConnectComponent } from './proximity-connect/proximity-connect.component';
import { FloatingEdgesComponent } from './floating-edges/floating-edges.component';

const routes: Routes = [
  {
    path: 'hello-world',
    component: HelloWorldComponent,
  },
  {
    path: 'feature-overflow',
    component: FeatureOverflowComponent,
  },
  {
    path: 'proximity-connect',
    component: ProximityConnectComponent,
  },
  {
    path: 'floating-edges',
    component: FloatingEdgesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
