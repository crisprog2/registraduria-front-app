import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlEndpoint = 'http://localhost:8080/api/personas';

  constructor(private http: HttpClient) { }
  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.urlEndpoint);
  }
}
