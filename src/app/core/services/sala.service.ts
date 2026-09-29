import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Sala } from "../models";

@Injectable(
    {
        providedIn: 'root'
    }
    
)

export class SalaService{

    private http = inject(HttpClient);

    private apiUrl = 'http://192.168.2.159:8080/salas';

    listar(): Observable <Sala>{
        return this.http.get<Sala>(this.apiUrl);
    }

    buscarPorId(id: number): Observable<Sala>{
        return this.http.get<Sala>(`${this.apiUrl}/${id}`);

        
    }

    salvar(sala: Sala):Observable <Sala>{
        if(sala.id){
            return this.http.put<Sala>(
                `${this.apiUrl}/${sala.id}`, sala
            );
        }

        return this.http.post<Sala>(
            this.apiUrl,
            sala
        );
    }


    excluir(id:number): Observable<void>{
        return this.http.delete<void>(
            `${this.apiUrl}/${id}`
        );
    }
}