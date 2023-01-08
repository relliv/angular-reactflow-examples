import { Component, OnInit } from '@angular/core';
import ReactFlowProximityConnect from './_react/ReactFlowProximityConnect';

@Component({
  selector: 'app-proximity-connect',
  templateUrl: './proximity-connect.component.html',
  styleUrls: ['./proximity-connect.component.scss'],
})
export class ProximityConnectComponent implements OnInit {
  public ReactFlowProximityConnect: any = ReactFlowProximityConnect;

  constructor() {}

  ngOnInit(): void {}
}
