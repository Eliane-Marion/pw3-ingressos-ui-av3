import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Sala } from '../models';


@Injectable({
  providedIn: 'root'
})

export class SalaService {
  private http = inject(HttpClient);
  private apiUrl = 'http://192.168.2.159:8080/salas';
    

  listarAtivas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(`${this.apiUrl}`);
  }

  buscarPorSalaId(id: Number): Observable<Sala>{
    return this.http.get<Sala>(`${this.apiUrl}/${id}`);
  }

  Salvar(sala: Sala): Observable<Sala>{

    if(sala.id){
        return this.http.put<Sala>(`${this.apiUrl}/${sala.id}`, sala);
    }else{
        return this.http.post<Sala>(this.apiUrl, sala);
    }

  }

  Excluir(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
