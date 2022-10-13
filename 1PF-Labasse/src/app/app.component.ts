import { Component, OnInit } from '@angular/core';
import { Alumno } from './models/alumno';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  alumnos: Alumno[] = [


  ];

  constructor() {}


  ngOnInit(): void {

  }

  agregarAlumno($event: Alumno):void{
    this.alumnos.push($event);
    console.log(this.alumnos);
  }

}
