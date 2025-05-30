import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InlineBarChartComponent } from './inline-bar-chart/inline-bar-chart.component';
import { ChartKeyComponent } from './chart-key/chart-key.component';

@NgModule({
  declarations: [ChartKeyComponent, InlineBarChartComponent],
  imports: [CommonModule],
  exports: [ChartKeyComponent, InlineBarChartComponent],
})
export class ChartsModule {}
