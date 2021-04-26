import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ciudad } from './ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  private urlEndpoint = 'http://localhost:8080/api/ciudades';
  private urlEndpoint1 = 'http://localhost:8080/api/ciudad';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  getCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.urlEndpoint);
  }

  create(ciudad: Ciudad): Observable<Ciudad> {
    return this.http.post<Ciudad>(this.urlEndpoint1, ciudad, {headers: this.httpHeaders});
  }
}
