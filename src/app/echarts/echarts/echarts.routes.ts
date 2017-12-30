import { Routes, RouterModule } from '@angular/router';
import { EchartsComponent} from './echarts.component';

export const routes: Routes = [
  {
    path: 'echarts',
    component: EchartsComponent
  }
];
export const routing = RouterModule.forChild(routes);
