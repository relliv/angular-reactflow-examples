import { Component, EventEmitter, OnInit } from '@angular/core';
import NodeToolbars from './_react/NodeToolbars';

@Component({
  selector: 'app-node-toolbars',
  templateUrl: './node-toolbars.component.html',
  styleUrls: ['./node-toolbars.component.scss'],
})
export class NodeToolbarsComponent implements OnInit {
  public NodeToolbars: typeof NodeToolbars = NodeToolbars;
  public props: any = {
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
}
