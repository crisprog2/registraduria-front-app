import { DepartamentoService } from './departamento.service';
import { Component, OnInit } from '@angular/core';
import { Departamento } from './departamento';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html'
})
export class DepartamentoComponent implements OnInit {

  departamentos: Departamento[];

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
    this.departamentoService.getDepartamentos().subscribe(
      departamentos => this.departamentos = departamentos
    );
  }

}
