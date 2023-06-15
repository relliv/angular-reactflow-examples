import { Component, OnInit } from '@angular/core';
import ErdBuilder from './_react/ErdBuilder';

@Component({
  selector: 'app-erd-builder',
  templateUrl: './erd-builder.component.html',
  styleUrls: ['./erd-builder.component.scss'],
})
export class ErdBuilderComponent implements OnInit {
  public ErdBuilder: typeof ErdBuilder = ErdBuilder;

  constructor() {}

  ngOnInit(): void {}
}
