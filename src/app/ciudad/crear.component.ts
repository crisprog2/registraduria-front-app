import { Router } from '@angular/router';
import { CiudadService } from './ciudad.service';
import { Ciudad } from './ciudad';
import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../departamento/departamento.service';
import { Departamento } from '../departamento/departamento';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html'
})
export class CrearComponent implements OnInit {

  public ciudad: Ciudad = new Ciudad();
  departamentos: Departamento[];

  constructor(private ciudadService: CiudadService, private router: Router, private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe(
      departamentos => this.departamentos = departamentos
    );
  }

  public create(): void{
    this.ciudadService.create(this.ciudad).subscribe(
      response => this.router.navigate(['/ciudades'])
    );
  }

}
