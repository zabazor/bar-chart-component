import { Component } from '@angular/core';
import { IChartItem } from './charts/inline-bar-chart/inline-bar-chart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bar-chart';

  testChartDataA: IChartItem[] = [
    {
      label: 'Stained Glass',
      color: 'magenta',
      value: 6,
    },
    {
      label: 'Clay',
      color: 'cyan',
      value: 26,
    },
    {
      label: 'Canvas',
      color: 'yellow',
      value: 50,
    },
  ];

  testChartDataB: IChartItem[] = [
    {
      label: 'House Chores',
      color: 'green',
      value: 8,
    },
    {
      label: 'Work',
      color: 'red',
      value: 40,
    },
    {
      label: 'Fun',
      color: 'blue',
      value: 27,
    },
  ];
}
