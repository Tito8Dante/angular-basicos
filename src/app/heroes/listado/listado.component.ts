import { Component } from '@angular/core';
import { SelectorContext } from '@angular/compiler';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
 
  heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  jubilados: string = '';

  borrarHeroe() {

    console.log('Borrando...');
  
    this.jubilados = this.heroes.shift() || '';
  }
}

