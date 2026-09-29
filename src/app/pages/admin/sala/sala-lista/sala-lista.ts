import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { Router, RouterLink } from "@angular/router";
import { Observable, of } from 'rxjs';
import type { Sala } from '../../../../core/models';
import { SalaService } from '../../../../core/services/sala.service';


@Component({
  selector: 'app-sala-lista',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ContainerComponent, RouterLink],
  templateUrl: './sala-lista.html',
  styleUrl: './sala-lista.css'
})
export class SalaListaComponent implements OnInit {
  salas: Observable<Sala[]> = of([]);

  private salaService = inject(SalaService);
  private router = inject(Router);

  ngOnInit(): void {
    this.carregarSalas();
  }

  carregarSalas(): void {
    this.salas = this.salaService.listar();
  }

  editar(id: number): void {
    this.router.navigate(['/salas', id, 'editar']);
  }

  excluir(id: number): void {
    this.salaService.excluir(id).subscribe({
      next: () => this.carregarSalas(),
      error: (erro) => console.error('Erro ao excluir a sala', erro)
    });
  }
}
