import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRouting } from './hero.routes';
import {InfoHeroComponent } from './info-hero/info-hero.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HeroRouting,
    FormsModule
  ],
  declarations: [
    InfoHeroComponent
  ]
})
export class HerosFormModule { }
