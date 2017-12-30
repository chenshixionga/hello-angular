import {Component, OnInit, Input} from '@angular/core';
import {child} from './child.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() {
  }

  _child: child;
  @Input() province: object;

  @Input()
  set child(child: child) {
    this._child = child;
  }

  get child() {
    return this._child;
  }

  ngOnInit() {
  }

}
