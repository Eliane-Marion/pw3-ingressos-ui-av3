import { Injectable } from '@angular/core';
import { inject } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Sala } from '../models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class SalaService {
  
  private http = inject(HttpClient);
  private apiUrl = 'http://192.168.2.159:8080/salas'

    listarSalas(): Observable<Sala[]> {
      return this.http.get<Sala[]>(`${this.apiUrl}`);
    }

    buscarSalaPorId(id: Number): Observable<Sala>{
      return this.http.get<Sala>(`${this.apiUrl}/${id}`);
    }

    inativarSala(id:Number): Observable<void>
    {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }

    cadastrarOuAtualizarSala(sala: Sala, id:Number): Observable<Sala>
    {
      if(sala.id)
      {
        return this.http.post<Sala>(`${this.apiUrl}`, sala)
      }
    
      return this.http.put<Sala>(`${this.apiUrl}/${id}`, sala)
    }



  
}
