import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErdBuilderComponent } from './erd-builder.component';

describe('ErdBuilderComponent', () => {
  let component: ErdBuilderComponent;
  let fixture: ComponentFixture<ErdBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErdBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErdBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
