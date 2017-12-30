import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing } from './todo.routes';
import { TodoComponent } from './todo.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './todo-header/todo-header.component';
import { TodoGoingComponent } from './todo-going/todo-going.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ChildRouter1Component } from './child-router1/child-router1.component';
import { ChildRouter3Component } from './child-router3/child-router3.component';
import { ChildRouter2Component } from './child-router2/child-router2.component';
import { TrimSpacePipe } from './trim-space.pipe';

@NgModule({
  declarations: [
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoGoingComponent,
    TodoListComponent,
    TodoItemComponent,
    ChildRouter1Component,
    ChildRouter3Component,
    ChildRouter2Component,
    TrimSpacePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [

  ],
  bootstrap: [TodoComponent]
})
export class TodoModule { }
