import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDagreTreeComponent } from './custom-dagre-tree.component';

describe('CustomDagreTreeComponent', () => {
  let component: CustomDagreTreeComponent;
  let fixture: ComponentFixture<CustomDagreTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDagreTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomDagreTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
