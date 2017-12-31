import { Routes, RouterModule } from '@angular/router';
import { InfoHeroComponent } from './info-hero/info-hero.component'
export const routes: Routes = [
  {
    path:'heroform',
    component:InfoHeroComponent
  }
];
export const HeroRouting = RouterModule.forChild(routes);
