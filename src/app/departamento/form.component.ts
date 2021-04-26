import { DepartamentoService } from './departamento.service';
import { Departamento } from './departamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public departamento: Departamento = new Departamento();

  constructor(private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
  }

  public create(): void{
    this.departamentoService.create(this.departamento).subscribe(
      response => this.router.navigate(['/departamentos'])
    );
  }

}
