import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroJobAdComponent }   from './hero-job-ad.component';
import { AdBannerComponent }    from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective }          from './ad.directive';
import { AdService }            from './ad.service';
import { DynamicComponent }     from './dynamic.component'
import { DynamicRouting } from './dynamic.routes'
@NgModule({
  imports: [
    CommonModule,
    DynamicRouting
  ],
  providers: [AdService],
  declarations: [
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective,DynamicComponent ],
  entryComponents: [ HeroJobAdComponent, HeroProfileComponent ],
})
export class DynamicComponentModule { }
