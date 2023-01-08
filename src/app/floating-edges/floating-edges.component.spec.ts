import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingEdgesComponent } from './floating-edges.component';

describe('FloatingEdgesComponent', () => {
  let component: FloatingEdgesComponent;
  let fixture: ComponentFixture<FloatingEdgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingEdgesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingEdgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
