import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnimationComponent} from './test/animation/animation.component';
import {TestPipeComponent} from './test/test-pipe/test-pipe.component';
import {TestDirectiveComponent} from './test/test-directive/test-directive.component';
import { ParentComponent} from './test/parent/parent.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'animation',
    component: AnimationComponent
  },
  {
    path:'pipe',
    component: TestPipeComponent
  },
  {
    path:'directive',
    component:TestDirectiveComponent
  },
  {
    path:'parent',
    component:ParentComponent
  }
];

export const routing = RouterModule.forRoot(routes);
