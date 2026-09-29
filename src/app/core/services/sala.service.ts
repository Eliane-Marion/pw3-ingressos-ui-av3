import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Sala } from "../models";
import { Observable } from "rxjs";
import { NumericLiteral } from "typescript";

@Injectable ({
    providedIn: 'root'
})

export class SalaService{
    inativarSala(id: Number) {
      throw new Error('Method not implemented.');
    }
 
    private http = inject(HttpClient);
    private apiUrl = 'http://192.168.2.159:8080/salas';
    
    listarSalas(): Observable<Sala[]>
    {
        return this.http.get<Sala[]>(`${this.apiUrl}/salas`)
    }

    buscarSalasPorId(id: Number): Observable<Sala[]>
    {
        return this.http.get<Sala[]>(`${this.apiUrl}/salas/${id}`)
    }

    excluirSalas(id: Number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/salas${id}`)
    }

    atualizarSalas(id: Number, sala: Sala): Observable<Sala[]> {
        return this.http.put<Sala>(`${this.apiUrl}/salas/${id}`)
    }


}