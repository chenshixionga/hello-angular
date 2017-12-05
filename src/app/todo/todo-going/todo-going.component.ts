import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-todo-going',
  templateUrl: './todo-going.component.html',
  styleUrls: ['./todo-going.component.css']
})
export class TodoGoingComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  state = '';
  today = new Date();
  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.state = params['state'];
      console.log(localStorage.getItem('userId'));
    });
  }

}
