import { Component,Inject, OnDestroy, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations'
@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('loginState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active',[
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.3)'
        }),
        animate('80ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }))
      ]),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class AnimationComponent implements OnInit {

  constructor() { }
  loginBtnState:string ="";
  ngOnInit() {
    console.log(this.formatDate())
  }
  toggleLoginState(state: boolean){
    this.loginBtnState = state ? 'active' : 'inactive';
  }
  show(event){
    console.log(event);
  }
  formatDate() {
    let now = new Date(1433692800000);
    let year=now.getFullYear();
    let month:Number|string=now.getMonth()+1;
    month=month > 9 ? month :'0'+month;
    let date:number|string=now.getDate();
    date=date>9 ? date :'0'+date;
    return year+"-"+month+"-"+date
  }
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle;this.getFormat(this.toggle) }

  format2:string
  getFormat(isFormat){
    if(isFormat){
      this.format2='shortDate'
    }else {
      this.format2='fullDate'
    }
  }

  money:number=100
  percent:number=0.78

  power=5
  factor=1
}
