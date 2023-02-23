import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFlowsComponent } from './sub-flows.component';

describe('SubFlowsComponent', () => {
  let component: SubFlowsComponent;
  let fixture: ComponentFixture<SubFlowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubFlowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubFlowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
