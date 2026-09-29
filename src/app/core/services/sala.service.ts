import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../models/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private readonly http = inject(HttpClient);
  private readonly API_URL = 'http://192.168.2.159:8080/salas';

  listar(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.API_URL);
  }

  buscarPorId(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.API_URL}/${id}`);
  }

  salvar(sala: Sala): Observable<Sala> {
    if (sala.id) {
      return this.http.put<Sala>(`${this.API_URL}/${sala.id}`, sala);
    }
    return this.http.post<Sala>(this.API_URL, sala);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}