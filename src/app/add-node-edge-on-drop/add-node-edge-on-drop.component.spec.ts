import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNodeEdgeOnDropComponent } from './add-node-edge-on-drop.component';

describe('AddNodeEdgeOnDropComponent', () => {
  let component: AddNodeEdgeOnDropComponent;
  let fixture: ComponentFixture<AddNodeEdgeOnDropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNodeEdgeOnDropComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNodeEdgeOnDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
