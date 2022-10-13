import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from '../models/alumno';

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(a: Alumno, ...args: string[]): any {
    return `${a.nombre} ${a.apellido}`;
  }
}
