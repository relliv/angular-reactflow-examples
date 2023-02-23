import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import ReactFlowFloatingEdges from './_react/ReactFlowFloatingEdges';

@Component({
  selector: 'app-floating-edges',
  templateUrl: './floating-edges.component.html',
  styleUrls: ['./floating-edges.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FloatingEdgesComponent implements OnInit {
  public ReactFlowFloatingEdges: typeof ReactFlowFloatingEdges =
    ReactFlowFloatingEdges;

  constructor() {}

  ngOnInit(): void {}
}
