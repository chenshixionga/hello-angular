import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AnimationComponent} from './test/animation/animation.component';
import {TestPipeComponent} from './test/test-pipe/test-pipe.component';

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
  }
];

export const routing = RouterModule.forRoot(routes);
