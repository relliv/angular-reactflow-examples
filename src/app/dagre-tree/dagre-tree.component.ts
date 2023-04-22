import { Component, OnInit } from '@angular/core';
import DagreTree from './_react/DagreTree';

@Component({
  selector: 'app-dagre-tree',
  templateUrl: './dagre-tree.component.html',
  styleUrls: ['./dagre-tree.component.scss'],
})
export class DagreTreeComponent implements OnInit {
  public DagreTree: typeof DagreTree = DagreTree;

  constructor() {}

  ngOnInit(): void {}
}
