import { Component, EventEmitter, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import {
  nodes as initialNodes,
  edges as initialEdges,
} from './_react/CustomNode';
import ReactFlowSubFlows from './_react/ReactFlowSubFlows';

@Component({
  selector: 'app-sub-flows',
  templateUrl: './sub-flows.component.html',
  styleUrls: ['./sub-flows.component.scss'],
})
export class SubFlowsComponent implements OnInit {
  public ReactFlowSubFlows: typeof ReactFlowSubFlows = ReactFlowSubFlows;
  public props: any = {
    nodes: initialNodes,
    edges: initialEdges,
    onNodeConnected: this.onNodeConnected,
  };
  public nodeConnected = new EventEmitter<void>();

  constructor() {
    this.onNodeConnected = this.onNodeConnected.bind(this);
  }

  ngOnInit(): void {}

  public onNodeConnected(event: any) {
    console.log('[NG] onNodeConnected', event);

    if (this.nodeConnected) {
      this.nodeConnected.emit();
    }
  }

  public onEvent(event: any) {
    console.debug(event);
  }
}
