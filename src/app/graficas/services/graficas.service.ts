import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GraficasService {
  constructor(private http: HttpClient) {}

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesData() {
    return this.getUsuariosRedesSociales().pipe(
      delay(1500),
      // el delay solo es para poder visualar el alert del mensaje de cargando
      map((data) => {
        const labels = Object.keys(data);
        const valores = Object.values(data);

        return { labels, valores };
      })
    );
  }
}
