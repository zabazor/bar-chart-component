import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartKeyComponent } from './chart-key.component';

describe('ChartKeyComponent', () => {
  let component: ChartKeyComponent;
  let fixture: ComponentFixture<ChartKeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChartKeyComponent]
    });
    fixture = TestBed.createComponent(ChartKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
