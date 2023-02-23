import {
  ChangeDetectorRef,
  Component,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import ReactFlow, { Background, Controls } from 'reactflow';
import ReactFlowHelloWorld from './_react/ReactFlowHelloWorld';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {
  public ReactFlow: typeof ReactFlow = ReactFlow;
  public Background: typeof Background = Background;
  public Controls: typeof Controls = Controls;

  public rootId = 'root';
  private rootElement: ReactDOM.Root | null = null;

  private hasViewLoaded = false;

  public props: any = {
    edges: [
      { id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' },
    ],

    nodes: [
      {
        id: '1',
        data: { label: 'Hello' },
        position: { x: 0, y: 0 },
        type: 'input',
      },
      {
        id: '2',
        data: { label: 'World' },
        position: { x: 100, y: 100 },
      },
    ],

    children: [Background],
  };

  public constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.hasViewLoaded) {
      this.renderReactApp();
    }
  }

  ngAfterViewInit() {
    if (!this.hasViewLoaded) {
      this.hasViewLoaded = true;

      this.renderReactApp();
    }
  }

  ngOnDestroy() {}

  private renderReactApp() {
    this.rootElement = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    );

    this.rootElement.render(
      React.createElement(ReactFlowHelloWorld as React.FC<any>)
    );

    // ReactDOM.render is no longer supported in React 18
    // ReactDOM.render(
    //   React.createElement(ReactFlowHelloWorld),
    //   document.getElementById(this.rootId)
    // );
  }
}
