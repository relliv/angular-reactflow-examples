import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { ReactComponentDirective } from './react-component.directive';
import { FeatureOverflowComponent } from './feature-overflow/feature-overflow.component';
import { ProximityConnectComponent } from './proximity-connect/proximity-connect.component';
import { FloatingEdgesComponent } from './floating-edges/floating-edges.component';
import { DragHandleComponent } from './drag-handle/drag-handle.component';
import { SubFlowsComponent } from './sub-flows/sub-flows.component';
import { TurboFlowComponent } from './turbo-flow/turbo-flow.component';
import { AddNodeEdgeOnDropComponent } from './add-node-edge-on-drop/add-node-edge-on-drop.component';
import { NodeToolbarsComponent } from './node-toolbars/node-toolbars.component';
import { DagreTreeComponent } from './dagre-tree/dagre-tree.component';
import { CustomDagreTreeComponent } from './custom-dagre-tree/custom-dagre-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    FeatureOverflowComponent,
    ProximityConnectComponent,
    FloatingEdgesComponent,
    DragHandleComponent,
    SubFlowsComponent,
    TurboFlowComponent,
    AddNodeEdgeOnDropComponent,
    NodeToolbarsComponent,
    DagreTreeComponent,
    CustomDagreTreeComponent,
  ],
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
