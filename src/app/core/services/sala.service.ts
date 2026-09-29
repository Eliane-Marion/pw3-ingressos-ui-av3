import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { salas } from '../models/sala';


@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private http = inject(HttpClient);
  private apiUrl = 'http:192.168.2.159:8080/sala';


  buscarSalaId(id: Number): Observable<salas>{
    return this.http.get<salas>(`${this.apiUrl}/${id}`);
  }

  deleteSalaId(id: Number): Observable<salas>{
    return this.http.delete<salas>(`${this.apiUrl}/${id}`);
  }
  
}