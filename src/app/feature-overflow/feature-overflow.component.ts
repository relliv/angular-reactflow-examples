import {
  ChangeDetectorRef,
  Component,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ReactFlow, { Background, Controls } from 'reactflow';
import ReactFlowFeatureOverview from './reactComponents/ReactFlowFeatureOverview';
import {
  nodes as initialNodes,
  edges as initialEdges,
} from './reactComponents/CustomNode';
import CustomNode from './reactComponents/CustomNode';

@Component({
  selector: 'app-feature-overflow',
  templateUrl: './feature-overflow.component.html',
  styleUrls: ['./feature-overflow.component.scss'],
})
export class FeatureOverflowComponent implements OnInit {
  public ReactFlow: any = ReactFlow;
  public Background: any = Background;
  public Controls: any = Controls;

  public rootId = 'root';
  private rootElement: ReactDOM.Root | null = null;

  private hasViewLoaded = false;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    if (!this.hasViewLoaded) {
      this.hasViewLoaded = true;

      this.renderReactApp();
    }
  }

  private renderReactApp() {
    this.rootElement = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );

    this.rootElement.render(
      React.createElement(ReactFlowFeatureOverview as React.FC<any>)
    );

    // ReactDOM.render is no longer supported in React 18
    // ReactDOM.render(
    //   React.createElement(ReactFlowHelloWorld),
    //   document.getElementById(this.rootId)
    // );
  }
}
