import { Routes, RouterModule } from '@angular/router';
import { DynamicComponent } from './dynamic.component'
export const routes: Routes = [
  {path:'dynamic',component: DynamicComponent }
];
export const DynamicRouting = RouterModule.forChild(routes);
