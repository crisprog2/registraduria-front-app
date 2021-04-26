import { LugarService } from './lugar.service';
import { Component, OnInit } from '@angular/core';
import { Lugar } from './lugar';

@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html'
})
export class LugarComponent implements OnInit {

  lugares: Lugar[];

  constructor(private lugarService: LugarService) { }

  ngOnInit(): void {
    this.lugarService.getLugares().subscribe(
      lugares => this.lugares = lugares
    );
  }

}
