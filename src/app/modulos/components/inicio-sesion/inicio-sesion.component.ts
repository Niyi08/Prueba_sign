<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectItem } from "primeng/api";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

    //opciones del selecItem [estudiante e profesor]
    types: SelectItem[] = [];
    typeName: string = "";

  constructor() { 
    //Opciones del select item
    this.types = [
      {label: "Estudiante", value: "Estudiante", icon: "pi pi-palette" },
      {label: "Profesor", value: "Profesor", icon: "pi pi-book" },
    ];
  }

  ngOnInit(): void {
  }

   //Eleccion de alguna opcion para formulario
   changeType(event: any){
    this.typeName = event.option.value
  }

}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> a0dbfb2ae0aada0ba69e54a4874e632ce24381ba