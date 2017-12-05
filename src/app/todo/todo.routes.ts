import {TodoComponent} from './todo.component';
import { Routes, RouterModule } from '@angular/router';
import {TodoGoingComponent} from './todo-going/todo-going.component';
import { ChildRouter1Component} from './child-router1/child-router1.component';
import { ChildRouter2Component} from './child-router2/child-router2.component';
import { ChildRouter3Component} from './child-router3/child-router3.component';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent
  },
  {
    path: 'going/:state',
    component: TodoGoingComponent,
    children: [{
      path: 'one',
      component: ChildRouter1Component
    }, {
      path: 'two',
      component: ChildRouter2Component,
      children: [{
        path: 'three',
        component: ChildRouter3Component
      }]
    }]
  }
];
export const routing = RouterModule.forChild(routes);
