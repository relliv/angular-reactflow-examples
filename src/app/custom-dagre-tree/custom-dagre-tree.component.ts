import { Component, OnInit } from '@angular/core';
import CustomDagreTree from './_react/CustomDagreTree';

@Component({
  selector: 'app-custom-dagre-tree',
  templateUrl: './custom-dagre-tree.component.html',
  styleUrls: ['./custom-dagre-tree.component.scss'],
})
export class CustomDagreTreeComponent implements OnInit {
  public CustomDagreTree: typeof CustomDagreTree = CustomDagreTree;

  constructor() {}

  ngOnInit(): void {}
}
