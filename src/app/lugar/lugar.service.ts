import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lugar } from './lugar';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  private urlEndpoint = 'http://localhost:8080/api/lugares';

  constructor(private http: HttpClient) { }
  getLugares(): Observable<Lugar[]> {
    return this.http.get<Lugar[]>(this.urlEndpoint);
  }

}
