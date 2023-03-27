import { Component, OnInit } from '@angular/core';
import AddNodeEdgeOnDrop from './_react/AddNodeEdgeOnDrop';

@Component({
  selector: 'app-add-node-edge-on-drop',
  templateUrl: './add-node-edge-on-drop.component.html',
  styleUrls: ['./add-node-edge-on-drop.component.scss'],
})
export class AddNodeEdgeOnDropComponent implements OnInit {
  public AddNodeEdgeOnDrop: typeof AddNodeEdgeOnDrop = AddNodeEdgeOnDrop;

  constructor() {}

  ngOnInit(): void {}
}
