import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartService } from '../chart-service/chart.service';
import { deepClone } from 'src/app/utilities/object-functions';

export interface IChartItem {
  label?: string;
  color: string;
  value: number;
  invalid?: boolean;
  widthPercentage?: string;
  xPosition?: string;
}

export enum CHART_COLORS {
  blue = '#008ec7',
  cyan = '#2eb8b8',
  red = '#e60700',
  magenta = '#cc00cc',
  yellow = '#e6b800',
  green = '#006000',
  gray = '#484848',
  black = '#000000',
  white = '#FFFFFF',
}

@Component({
  selector: 'zab-inline-bar-chart',
  templateUrl: './inline-bar-chart.component.html',
  styleUrls: ['./inline-bar-chart.component.scss'],
})
export class InlineBarChartComponent implements OnInit, OnChanges {
  @Input() chartItems: IChartItem[] = [];
  @Input() totalValue: number = 0;

  @Input() remainderValue: number = 0;
  @Input() remainderColor: string = CHART_COLORS.black;

  @Input() borderColor: string = CHART_COLORS.black;
  @Input() isChartThick: boolean = false;

  readonly colors = CHART_COLORS;

  bars: IChartItem[] = [];

  barGapPercentage = 0.5;
  totalChartPercentage = 100;
  totalChartValue: number = 0;

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.updateBars();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateBars();
  }

  private updateBars(): void {
    this.bars = deepClone(this.chartItems);

    this.totalChartValue = this.chartService.getTotalValue(
      this.bars,
      this.totalValue,
      this.remainderValue
    );

    this.chartService.addRemainderChartItem(
      this.bars,
      this.totalChartValue,
      this.remainderColor
    );

    this.setBarSvgData();
  }

  private setBarSvgData(): void {
    let currentPercentagePosition = 0;

    // Update the bar data values needed to generate the SVG
    for (const bar of this.bars) {
      const barPercentage =
        (bar.value / this.totalChartValue) * this.totalChartPercentage;

      bar.widthPercentage = barPercentage.toString() + '%';

      if (
        barPercentage > this.barGapPercentage &&
        currentPercentagePosition + barPercentage < this.totalChartPercentage
      ) {
        // Add a gap at the end of the bar element if it does NOT span the remaining length of the total bar
        bar.widthPercentage =
          (barPercentage - this.barGapPercentage).toString() + '%';
      }

      // The next bar position should start at the end of the current percentage position
      bar.xPosition = currentPercentagePosition.toString() + '%';

      // update the position for the next bar
      currentPercentagePosition = currentPercentagePosition + barPercentage;
    }
  }
}
