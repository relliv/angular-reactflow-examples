import { HelloWorldComponent } from './hello-world/hello-world.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureOverflowComponent } from './feature-overflow/feature-overflow.component';
import { ProximityConnectComponent } from './proximity-connect/proximity-connect.component';
import { FloatingEdgesComponent } from './floating-edges/floating-edges.component';
import { DragHandleComponent } from './drag-handle/drag-handle.component';
import { SubFlowsComponent } from './sub-flows/sub-flows.component';
import { TurboFlowComponent } from './turbo-flow/turbo-flow.component';
import { AddNodeEdgeOnDropComponent } from './add-node-edge-on-drop/add-node-edge-on-drop.component';
import { NodeToolbarsComponent } from './node-toolbars/node-toolbars.component';
import { DagreTreeComponent } from './dagre-tree/dagre-tree.component';

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
  {
    path: 'drag-handle',
    component: DragHandleComponent,
  },
  {
    path: 'sub-flows',
    component: SubFlowsComponent,
  },
  {
    path: 'turbo-flow',
    component: TurboFlowComponent,
  },
  {
    path: 'add-node-edge-on-drop',
    component: AddNodeEdgeOnDropComponent,
  },
  {
    path: 'node-toolbars',
    component: NodeToolbarsComponent,
  },
  {
    path: 'dagre-tree',
    component: DagreTreeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
