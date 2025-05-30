import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import {
  CHART_COLORS,
  IChartItem,
} from '../inline-bar-chart/inline-bar-chart.component';
import { ChartService } from '../chart-service/chart.service';
import { deepClone } from 'src/app/utilities/object-functions';

@Component({
  selector: 'zab-chart-key',
  templateUrl: './chart-key.component.html',
  styleUrls: ['./chart-key.component.scss'],
})
export class ChartKeyComponent implements OnInit, OnChanges {
  @Input() chartItems: IChartItem[] = [];
  @Input() borderColor: string = '';
  @Input() remainderValue: number = 0;
  @Input() totalValue: number = 0;
  @Input() remainderColor: string = '';
  @Input() remainderLabel: string = '';
  @Input() isCurrency: boolean = false;

  readonly color = CHART_COLORS;

  chartKeys: IChartItem[] = [];

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.updateKeys();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateKeys();
  }

  private updateKeys(): void {
    this.chartKeys = deepClone(this.chartItems);

    this.totalValue = this.chartService.getTotalValue(
      this.chartKeys,
      this.totalValue,
      this.remainderValue
    );

    this.chartService.addRemainderChartItem(
      this.chartKeys,
      this.totalValue,
      this.remainderColor,
      this.remainderLabel
    );
  }
}
