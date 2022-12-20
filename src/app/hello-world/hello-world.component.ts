import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import ReactFlow, { Background, Controls } from 'reactflow';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {
  public Flow: any = ReactFlow;

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
  };

  public constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    // nested components
    this.Flow.Background = Background;
    this.Flow.Controls = Controls;

    this.changeDetectorRef.detectChanges();
  }
}
