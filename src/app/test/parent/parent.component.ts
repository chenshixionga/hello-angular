import { Component, OnInit } from '@angular/core';
import { child } from '../child/child.model';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }
  province={'city':'','name':''}
  child:child
  child1={
    'name':'kankan1',
    'age': 21,
    'salary':5007
  }

  ngOnInit() {
    this.child = new child()
    this.child.name='kankan'
    this.child.age= 18
    this.child.salary=5000
  }
  nameChange(value){
    console.log(value)
  }
}

