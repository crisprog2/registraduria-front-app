import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departamento } from './departamento';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private urlEndpoint = 'http://localhost:8080/api/departamentos';
  private urlEndpoint1 = 'http://localhost:8080/api/departamento';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getDepartamentos(): Observable<Departamento[]> {
    return this.http.get<Departamento[]>(this.urlEndpoint);
  }

  create(departamento: Departamento): Observable<Departamento> {
    return this.http.post<Departamento>(this.urlEndpoint1, departamento, {headers: this.httpHeaders});
  }
}
