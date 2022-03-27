import { Component, OnInit } from '@angular/core';
import { RutaBreadcrumService } from '../../../../services/ruta-breadcrum.service';

@Component({
  selector: 'app-sopa-numeros',
  templateUrl: './sopa-numeros.component.html',
  styles: [
  ]
})
export class SopaNumerosComponent implements OnInit {

  constructor(private breadcrumbService: RutaBreadcrumService) {
    
   }

  ngOnInit(): void {
    this.breadcrumbService.setItems([
      { label: 'Actividades', routerLink: ['/actividades']}, 
      { label: 'sopa de numeros' }
    ]);
  }

}
