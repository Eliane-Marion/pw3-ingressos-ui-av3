import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Filme } from '../models';


@Injectable({
  providedIn: 'root'
})

export class FilmeService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/filmes';

  listarEmCartaz(): Observable<Filme[]> {
    return this.http.get<Filme[]>(`${this.apiUrl}/em-cartaz`);
  }

  buscarSessoesPorFilmeId(id: Number): Observable<Filme>{
    return this.http.get<Filme>(`${this.apiUrl}/${id}/sessoes`);
  }
}
