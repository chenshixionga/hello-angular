import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarComponent } from './bar/bar.component';
import { EchartsComponent } from './echarts/echarts.component';
import {routing} from './echarts/echarts.routes';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    routing,
    NgxEchartsModule
  ],
  declarations: [BarComponent, EchartsComponent]
})
export class EchartsModule { }
