import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouter1Component } from './child-router1.component';

describe('ChildRouter1Component', () => {
  let component: ChildRouter1Component;
  let fixture: ComponentFixture<ChildRouter1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouter1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouter1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
