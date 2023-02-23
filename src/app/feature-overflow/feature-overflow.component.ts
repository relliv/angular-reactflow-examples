import { Component, OnInit } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ReactFlow, { Background, Controls } from 'reactflow';
import ReactFlowFeatureOverview from './_react/ReactFlowFeatureOverview';

@Component({
  selector: 'app-feature-overflow',
  templateUrl: './feature-overflow.component.html',
  styleUrls: ['./feature-overflow.component.scss'],
})
export class FeatureOverflowComponent implements OnInit {
  public ReactFlow: typeof ReactFlow = ReactFlow;
  public Background: typeof Background = Background;
  public Controls: typeof Controls = Controls;

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
  }
}
