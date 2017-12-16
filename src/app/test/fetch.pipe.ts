import { Pipe, PipeTransform } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Pipe({
  name: 'fetch',
  pure: false
})
export class FetchPipe implements PipeTransform {
  private cachedUrl= ""
  private cachedData :any= null
  constructor(private http:Http){}
  transform(url: string): any {
    if (url !== this.cachedUrl) {
      this.cachedData = null;
      this.cachedUrl = url;
      this.http.get(url)
        .map( result => result.json() )
        .subscribe( result => this.cachedData = result );
    }

    return this.cachedData;
  }

}
