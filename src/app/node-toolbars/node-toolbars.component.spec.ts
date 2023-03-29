import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeToolbarsComponent } from './node-toolbars.component';

describe('NodeToolbarsComponent', () => {
  let component: NodeToolbarsComponent;
  let fixture: ComponentFixture<NodeToolbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodeToolbarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeToolbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
