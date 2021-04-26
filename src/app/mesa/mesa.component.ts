import { MesaService } from './mesa.service';
import { Component, OnInit } from '@angular/core';
import { Mesa } from './mesa';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html'
})
export class MesaComponent implements OnInit {

  mesas: Mesa[];

  constructor(private mesaService: MesaService) { }

  ngOnInit(): void {
    this.mesaService.getMesas().subscribe(
      mesas => this.mesas = mesas
    );
  }

}
