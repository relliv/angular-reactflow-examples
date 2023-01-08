import { Component, OnInit } from '@angular/core';
import ReactFlowDragHandle from './_react/ReactFlowDragHandle';

@Component({
  selector: 'app-drag-handle',
  templateUrl: './drag-handle.component.html',
  styleUrls: ['./drag-handle.component.scss'],
})
export class DragHandleComponent implements OnInit {
  public ReactFlowDragHandle: any = ReactFlowDragHandle;

  constructor() {}

  ngOnInit(): void {}
}
