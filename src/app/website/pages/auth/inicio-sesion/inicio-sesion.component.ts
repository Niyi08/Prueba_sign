import { Component, OnInit } from '@angular/core';
import { SelectItem } from "primeng/api";

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

    //opciones del selecItem [estudiante e profesor]
    types: SelectItem[] = [];
    typeName: string = "Estudiante";

  constructor() { 
    
  }

  ngOnInit(): void {
    //Opciones del select item
    this.types = [
      {label: "Estudiante", value: "Estudiante", icon: "pi pi-palette" },
      {label: "Profesor", value: "Profesor", icon: "pi pi-book" },
    ];
  }

   //Eleccion de alguna opcion para formulario
   changeType(event: any){
    this.typeName = event.option.value;
  }

}

