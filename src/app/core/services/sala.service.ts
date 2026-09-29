import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from '../models';


@Injectable({
  providedIn: 'root'
})
export class SalaService{
    private http = inject(HttpClient);
    private apiUrl  = 'http://192.168.2.159:8080/salas';

    listarAtivas(): Observable<Sala[]>{
        return this.http.get<Sala[]>(`${this.apiUrl}/salas-ativas`);
    }
    
    buscarSalaPorId(id: Number): Observable<Sala>{
        return this.http.get<Sala>(`${this.apiUrl}/${id}/salas`);
    }

    salvarSala(sala: Sala): Observable<Sala>{
        if(sala.id){
            return this.http.put<Sala>(`${this.apiUrl}/${sala.id}`, sala);
        }
        else{
            return this.http.post<Sala>(this.apiUrl, sala);
        }
    }

    excluirSala(id: Number):Observable<void>{
        return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}