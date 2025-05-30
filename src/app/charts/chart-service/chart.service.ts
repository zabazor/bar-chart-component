import { Injectable } from '@angular/core';
import { IChartItem } from '../inline-bar-chart/inline-bar-chart.component';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  maxPercentage = 100;

  constructor() {}

  getTotalValue(
    chartItems: IChartItem[],
    totalValue: number,
    remainderValue: number
  ): number {
    // If there is already a total, then we are already done
    if (totalValue) {
      return totalValue;
    }

    const totalChartItemsValue = this.getTotalChartItemsValue(chartItems);

    // Add the remainder to the total if it is provided
    if (remainderValue) {
      return totalChartItemsValue + remainderValue;
    }

    return totalChartItemsValue;
  }

  addRemainderChartItem(
    chartItems: IChartItem[],
    totalValue: number,
    remainderColor: string,
    remainderLabel: string = ''
  ): void {
    const totalChartItemsValue = this.getTotalChartItemsValue(chartItems);

    const remainder = totalValue - totalChartItemsValue;

    const remainderBar: IChartItem = {
      value: remainder,
      color: remainderColor,
      label: remainderLabel,
    };

    chartItems.push(remainderBar);
  }

  private getTotalChartItemsValue(chartItems: IChartItem[]): number {
    return chartItems
      ? chartItems.reduce(
          (previousValue, currentItem) => previousValue + currentItem.value,
          0
        )
      : 0;
  }
}
