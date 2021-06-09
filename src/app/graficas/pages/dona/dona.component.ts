import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Colors, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  public doughnutChartLabels: Label[] = [
    'Download Sales',
    'In-Store Sales',
    'Mail-Order Sales',
  ];
  public doughnutChartData: MultiDataSet = [[350, 450, 100]];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Colors[] = [
    {
      backgroundColor: ['#38FFE4', '#46FF7D', '#79FF38'],
      hoverBackgroundColor: ['#33E89D', '#33E836', '#DEE836'],
    },
    // declaramos un array/propiedad llamada "colors" y le añadimos la interface "Colors", tiene que ser un
    // array porque Colors tiene mas propiedades como el hover
  ];
}
