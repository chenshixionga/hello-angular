import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  desc = '';
  isCheck = false;
  isColor= 2;
  switch= '1111111111111';
  font= 'fontColor';
  list = [
    {name: 'foot'},
    {name: 'head'},
    {name: 'apple'},
    {name: 'orange'}
    ];
   todoList = [{'id': 'test1', 'type': 'radio', 'name': 'test', 'check': true, 'sname': '姓名'},
     {'id': 'test2', 'type': 'radio', 'name': 'test', 'check': true, 'sname': '性别'},
     {'id': 'test3', 'type': 'radio', 'name': 'test', 'check': true, 'sname': '年龄'},
     {'id': 'test4', 'type': 'radio', 'name': 'test', 'check': true, 'sname': '薪资'}
   ];
  constructor(private  service: TodoService) { }

  ngOnInit() {
  }
  addArray() {
    this.todoList[0].sname = '改变了';
  }
  addTodo() {
    this.todos = this.service.addTodo(this.desc);
    this.desc = '';
  }
  onTextChanges(value) {
    this.desc = value;
  }
  add(val) {
    console.log(val);
  }
  change(value) {
    console.log('参数传回父组件处理' + value);
  }

}
