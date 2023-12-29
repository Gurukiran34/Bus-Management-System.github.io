import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBusComponent } from './view-bus.component';

describe('ViewBusComponent', () => {
  let component: ViewBusComponent;
  let fixture: ComponentFixture<ViewBusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBusComponent]
    });
    fixture = TestBed.createComponent(ViewBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
