import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Filme, Sala } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/salas';

 buscarPorId(id: Number): Observable<Sala>{
    return this.http.get<Sala>(`${this.apiUrl}/${id}`);
  }
   Salvar(id: Number): Observable<Sala>{
    return this.http.put<Sala>(`${this.apiUrl}/${id}`);
  }
   excluir(id: Number): Observable<Sala>{
    return this.http.delete<Sala>(`${this.apiUrl}/${id}`);
  }
   ListarAtivas(): Observable<Sala>{
    return this.http.get<Sala>(`${this.apiUrl}`);
  }
   CriarUmaSala(): Observable<Sala>{
    return this.http.post<Sala>(`${this.apiUrl}`);
  }
}










