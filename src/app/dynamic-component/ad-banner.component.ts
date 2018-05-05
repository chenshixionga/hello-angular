import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem }      from './ad-item';
import { AdComponent } from './ad.component';

@Component({
  selector: 'app-add-banner',
  template: `
    <style>
      .hero-profile {
        border: 1px solid gray;
        padding: 5px;
        padding-bottom: 20px;
        padding-left: 20px;
        border-radius: 10px;
        background-color: lightgreen;
        color: black;
      }

      .job-ad {
        border: 1px solid gray;
        padding: 5px;
        padding-bottom: 20px;
        padding-left: 20px;
        border-radius: 10px;
        background-color: lightblue;
        color: black;
      }

      .ad-banner {
        width: 400px;
      }
    </style>
    <div class="ad-banner">
      <h3>Advertisements</h3>
      <ng-template ad-host></ng-template>
    </div>
  `
})
export class AdBannerComponent implements AfterViewInit, OnDestroy {
  @Input() ads: AdItem[];
  currentAddIndex: number = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  subscription: any;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAddIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}
