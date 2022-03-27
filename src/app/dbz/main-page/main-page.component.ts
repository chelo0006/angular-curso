import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje={
    nombre: '',
    poder: 0
  }

  get personajes():Personaje[]{
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje( arg: Personaje){
      this.personajes.push(arg);
  }

  constructor( public dbzService: dbzService){ }
}
