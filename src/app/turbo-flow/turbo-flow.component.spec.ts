import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurboFlowComponent } from './turbo-flow.component';

describe('TurboFlowComponent', () => {
  let component: TurboFlowComponent;
  let fixture: ComponentFixture<TurboFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurboFlowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurboFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
