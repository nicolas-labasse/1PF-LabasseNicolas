import { Component, EventEmitter, OnInit, Output,  } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Alumno } from 'src/app/models/alumno';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;

  @Output() agregarAlumnos: EventEmitter<Alumno> = new EventEmitter<Alumno>();
   
  constructor(
    private form: FormBuilder
  ) { 
    this.formulario = form.group({
      id: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
      apellido: new FormControl('', [Validators.required, Validators.minLength(3)]),
      edad: new FormControl('', [Validators.required, Validators.minLength(1)]),
      email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    })
  }

  ngOnInit(): void {
  }

agregarAlumno(){
  console.log(this.formulario.value);
  this.agregarAlumnos.emit(this.formulario.value);
}

}
