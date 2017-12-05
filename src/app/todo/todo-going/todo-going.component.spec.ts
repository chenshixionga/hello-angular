import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoGoingComponent } from './todo-going.component';

describe('TodoGoingComponent', () => {
  let component: TodoGoingComponent;
  let fixture: ComponentFixture<TodoGoingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoGoingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoGoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
