import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineBarChartComponent } from './inline-bar-chart.component';

describe('InlineBarChartComponent', () => {
  let component: InlineBarChartComponent;
  let fixture: ComponentFixture<InlineBarChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InlineBarChartComponent],
    });
    fixture = TestBed.createComponent(InlineBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
