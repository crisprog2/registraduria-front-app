import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesa } from './mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private urlEndpoint = 'http://localhost:8080/api/mesas';

  constructor(private http: HttpClient) { }
  getMesas(): Observable<Mesa[]> {
    return this.http.get<Mesa[]>(this.urlEndpoint);
  }
}
