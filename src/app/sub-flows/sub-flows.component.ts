import { Component, OnInit } from '@angular/core';
import ReactFlowSubFlows from './_react/ReactFlowSubFlows';

@Component({
  selector: 'app-sub-flows',
  templateUrl: './sub-flows.component.html',
  styleUrls: ['./sub-flows.component.scss'],
})
export class SubFlowsComponent implements OnInit {
  public ReactFlowSubFlows: typeof ReactFlowSubFlows = ReactFlowSubFlows;

  constructor() {}

  ngOnInit(): void {}
}
