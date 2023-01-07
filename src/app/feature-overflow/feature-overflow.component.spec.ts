import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureOverflowComponent } from './feature-overflow.component';

describe('FeatureOverflowComponent', () => {
  let component: FeatureOverflowComponent;
  let fixture: ComponentFixture<FeatureOverflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureOverflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureOverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
