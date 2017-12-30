import { Injectable } from '@angular/core';

@Injectable()
export class ChildService {

  constructor() { }
  MultipleServiceInstance(value){
    return value
  }
}
