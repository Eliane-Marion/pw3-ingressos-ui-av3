import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sala} from '../models';

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://192.168.2.159:8080/salas';

  listarSalasAtivas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(`${this.apiUrl}/salas`);
  }

  buscarSalasPorId(id: Number): Observable<Sala>{
    return this.http.get<Sala>(`${this.apiUrl}/salas/${id}`);
  }

  salvarSalas(sala: Sala): Observable<Sala>{
    
    const novaSala = {
        'nome': sala.nome,
        'preco': sala.preco
    }
    
        return this.http.post<Sala>(`${this.apiUrl}/salas/novo`, novaSala)
    }
    

    atualizarSala(sala: Sala, id: number): Observable<Sala> {
        
        const salaAtualizada = {
            'nome': sala.nome,
            'preco': sala.preco
        }

        if (sala.id == id) {
                 return this.http.put<Sala>(`${this.apiUrl}salas/novo/${id}`, salaAtualizada)
        } else {
            return this.salvarSalas(sala)
        }
    }

    deletarSala(sala: Sala, id: number) {

        if (sala.id == id) {
            return this.http.delete<Sala>(`${this.apiUrl}/salas/${id}`)
        }
    }
}
