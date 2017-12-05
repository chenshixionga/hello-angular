import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouter2Component } from './child-router2.component';

describe('ChildRouter2Component', () => {
  let component: ChildRouter2Component;
  let fixture: ComponentFixture<ChildRouter2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouter2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouter2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
