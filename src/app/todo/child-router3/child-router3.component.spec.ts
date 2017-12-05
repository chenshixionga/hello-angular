import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouter3Component } from './child-router3.component';

describe('ChildRouter3Component', () => {
  let component: ChildRouter3Component;
  let fixture: ComponentFixture<ChildRouter3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouter3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouter3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
