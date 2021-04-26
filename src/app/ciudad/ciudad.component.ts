import { CiudadService } from './ciudad.service';
import { Component, OnInit } from '@angular/core';
import { Ciudad } from './ciudad';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html'
})
export class CiudadComponent implements OnInit {

  ciudades: Ciudad[];

  constructor(private ciudadService: CiudadService) { }

  ngOnInit(): void {
    this.ciudadService.getCiudades().subscribe(
      ciudades => this.ciudades = ciudades
    );
  }

}
