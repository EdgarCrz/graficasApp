import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [],
})
export class GraficaBarraComponent implements OnInit {
  @Input() horizontal: boolean = false;
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  @Input() barChartLabels: Label[] = [
    // '2006',
    // '2007',
    // '2008',
    // '2009',
    // '2010',
    // '2011',
    // '2012',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#ED2455', hoverBackgroundColor: '#26ED43',},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#C72DE0', hoverBackgroundColor: '#DAF728',},
    // { data: [15, 48, 75, 19, 33, 27, 40], label: 'Series C',  backgroundColor: '#6424ED',  hoverBackgroundColor: '#F0631C',},
  ];

  constructor() {}

  ngOnInit(): void {
    if (this.horizontal) {
      this.barChartType = 'horizontalBar';
    }
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.barChartData[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
  }
}
