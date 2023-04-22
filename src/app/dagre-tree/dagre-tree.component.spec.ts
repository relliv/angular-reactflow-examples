import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagreTreeComponent } from './dagre-tree.component';

describe('DagreTreeComponent', () => {
  let component: DagreTreeComponent;
  let fixture: ComponentFixture<DagreTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DagreTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DagreTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
