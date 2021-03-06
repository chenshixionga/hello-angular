import { Routes, RouterModule } from '@angular/router';
import { PlaygroundComponent} from './playground/playground.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: PlaygroundComponent },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
})
export class PlaygroundRoutingModule { }
