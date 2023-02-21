import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',

})
export class MainPageComponent {

  constructor() { }

  nuevo: Personaje = {
    nombre: 'Maestro Loco',
    poder: 1000
  }
}

/* agregar() {
    console.log(this.nuevo);
  } */

/* cambiarNombre( event: any ){
console.log(event.target.value);
} */
