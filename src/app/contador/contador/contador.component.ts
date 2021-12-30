
import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <button (click)="acumular(+base)">+ {{base}}</button>
        <span>    {{contador}}    </span>
        <button (click)="acumular(-base)">- {{base}}</button>
`
})
export class ContadorComponent {
  public titulo: String = 'bases';
  public contador: number = 0;
  public base: number = 5;
  
  acumular (valor: number) {

    this.contador += valor;

  }
}