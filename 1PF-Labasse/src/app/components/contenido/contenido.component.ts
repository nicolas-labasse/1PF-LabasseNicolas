import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { FormularioComponent } from '../formulario/formulario.component';


@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {

@Input() alumno: Alumno[] =[

];

 alumnos: Alumno[] = [
  { id: 1, nombre: 'Juan', apellido: 'Perez', edad: 20, email: 'info@gmail.com'},
  { id: 2, nombre: 'Maria', apellido: 'Gomez', edad: 25, email: 'info@gmail.com'},
  { id: 3, nombre: 'Pedro', apellido: 'Gonzalez', edad: 30, email: 'info@gmail.com'},
  { id: 4, nombre: 'Jose', apellido: 'Rodriguez', edad: 35, email: 'info@gmail.com'},
  { id: 5, nombre: 'Luis', apellido: 'Martinez', edad: 40, email: 'info@gmail.com'},
  { id: 6, nombre: 'Ana', apellido: 'Lopez', edad: 45, email: 'info@gmail.com'}
];

 columnas: string[] = ['id', 'nombre','edad', 'email', 'acciones'];

 data: MatTableDataSource<Alumno> = new MatTableDataSource(this.alumnos);

 
  constructor() {
  }

  ngOnInit(): void {
    this.data.data = this.alumnos;
  }

  eliminar(id: number){
    let position = this.alumnos.findIndex((alumno) => alumno.id === id);
    this.alumnos.splice(position, 1);
    this.data.data = this.alumnos;
  }

  editar(id: number){
    let position = this.alumnos.findIndex((alumno) => alumno.id === id);
    this.alumnos[position].nombre = 'Namenuevo';
    this.alumnos[position].apellido = 'Cambiado';
    this.alumnos[position].edad = 99;
    this.alumnos[position].email = 'cambio@gmail.com';
    this.data.data = this.alumnos;
  }

}
