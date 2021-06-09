import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { Colors, Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [],
})
export class DonaHttpComponent implements OnInit {
  public doughnutChartLabels: Label[] = [
    // 'Download Sales','In-Store Sales','Mail-Order Sales',
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Colors[] = [
    {
      backgroundColor: ['#38FFE4', '#46FF7D', '#79FF38', '#0329FA', '#DE078D'],
      hoverBackgroundColor: [
        '#33E89D',
        '#33E836',
        '#DEE836',
        '#05ECFA',
        '#9507DE',
      ],
    },
    // declaramos un array/propiedad llamada "colors" y le añadimos la interface "Colors", tiene que ser un
    // array porque Colors tiene mas propiedades como el hover
  ];
  constructor(private graficasService: GraficasService) {}

  ngOnInit(): void {
    // this.graficasService.getUsuariosRedesSociales().subscribe((data) => {
    //   console.log(data);
    //   const labels = Object.keys(data);
    //   const valores = Object.values(data);
    //   // agregar el Object, nos proveé funcionalidades/metodos, para manejar objetos
    //   // en este caso usamos "keys" para extraer las llaves de los objetos y asi asignarlos a "doughnutChartLabels" se hizo lo mismo con la data
    //   this.doughnutChartLabels = labels;
    //   this.doughnutChartData.push(valores);
    // });
    // esto es lo mismo que lo de abajo pero lo de abajo esta optimizado y se emple parte del proceso en el service

    this.graficasService
      .getUsuariosRedesSocialesData()
      .subscribe(({ labels, valores }) => {
        // desestructuramos la "data" para obtener directamente labels y valores ({para desestructurar un objeto})
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(valores);
        // en este caso se puede hacer asi ya que las dos cosas son arreglos, por ende se le puede aplicar el push para insertar al array
        // this.doughnutChartData = valores tambien se podia hacer asi
      });
  }
}
