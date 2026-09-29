import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Sala } from '../../../../core/models/sala';
import { SalaService } from '../../../../core/services/sala.service';

@Component({
  selector: 'app-sala-lista',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './sala-lista.component.html',

})
export class SalaListaComponent implements OnInit {
  private readonly salaService = inject(SalaService);
  private readonly router = inject(Router);

  salas$!: Observable<Sala[]>;

  ngOnInit(): void {
    this.carregarSalas();
  }

  carregarSalas(): void {
    this.salas$ = this.salaService.listar();
  }

  editar(id: number): void {
    this.router.navigate(['/salas', id, 'editar']);
  }

  excluir(id: number): void {
    if (confirm('Deseja realmente excluir esta sala?')) {
      this.salaService.excluir(id).subscribe({
        next: () => this.carregarSalas(),
        error: (err) => console.error('Erro ao excluir sala:', err)
      });
    }
  }
}