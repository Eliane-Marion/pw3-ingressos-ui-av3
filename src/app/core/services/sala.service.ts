import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from '../models';


@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://192.168.2.159:8080/salas';

  listar(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Sala> {
    return this.http.get<Sala>(`${this.apiUrl}/${id}`);
  }

  salvar(sala: Sala): Observable<Sala> {
    const payload = { nome: sala.nome, preco: sala.preco };

    return sala.id
      ? this.http.put<Sala>(`${this.apiUrl}/${sala.id}`, payload)
      : this.http.post<Sala>(this.apiUrl, payload);
  }

  excluir(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
