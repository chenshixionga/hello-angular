import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() list: Array<object>;
  @Output() change = new EventEmitter<string>();
  isCheck = false;
  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.isCheck = !this.isCheck;
    this.change.emit('backValue');
  }
}
