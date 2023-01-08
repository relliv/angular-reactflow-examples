import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximityConnectComponent } from './proximity-connect.component';

describe('ProximityConnectComponent', () => {
  let component: ProximityConnectComponent;
  let fixture: ComponentFixture<ProximityConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximityConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProximityConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
