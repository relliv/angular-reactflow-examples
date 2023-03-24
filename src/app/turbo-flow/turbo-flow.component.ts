import { Component, OnInit } from '@angular/core';
import TurboFlow from './_react/TurboFlow';

@Component({
  selector: 'app-turbo-flow',
  templateUrl: './turbo-flow.component.html',
  styleUrls: ['./turbo-flow.component.scss'],
})
export class TurboFlowComponent implements OnInit {
  public TurboFlow: typeof TurboFlow = TurboFlow;

  constructor() {}

  ngOnInit(): void {}
}
