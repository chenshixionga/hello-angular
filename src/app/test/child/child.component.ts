import {Component, OnInit, Input, Host, SkipSelf, Optional, InjectionToken} from '@angular/core';
import {child} from './child.model';
import { ChildService } from './child.service'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers:[
  ]
})
export class ChildComponent implements OnInit {

  constructor( public childService: ChildService){
  }
  _child: child;
  multiple:string
  @Input() province: object;
  @Input() MultipleServiceInstance:string
  @Input()
  set child(child: child) {
    this._child = child;
  }

  get child() {
    return this._child;
  }

  ngOnInit() {
    this.multiple = this.childService.MultipleServiceInstance(this.MultipleServiceInstance)
  }
}

