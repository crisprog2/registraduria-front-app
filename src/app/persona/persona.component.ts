import { PersonaService } from './persona.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html'
})
export class PersonaComponent implements OnInit {

  personas: Persona[];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe(
      personas => this.personas = personas
    );
  }

}
