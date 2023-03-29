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
    onTooltipClicked: (event: any) => this.onTooltipClicked(event),
  };
  public nodeConnected = new EventEmitter<void>();

  constructor() {
    this.onTooltipClicked = this.onTooltipClicked.bind(this);
  }

  ngOnInit(): void {}

  public onTooltipClicked(event: any) {
    console.log('[NG] onTooltipClicked', event);

    if (this.nodeConnected) {
      this.nodeConnected.emit();
    }
  }
}
