import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero.model';

@Component({
  selector: 'app-info-hero',
  templateUrl: './info-hero.component.html',
  styleUrls: ['./info-hero.component.css']
})
export class InfoHeroComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;


  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  nameAdd(vallue) {
    console.log(vallue);
  }

  onSubmit(form) {
    console.log(form);
    this.submitted = true
  }
}
