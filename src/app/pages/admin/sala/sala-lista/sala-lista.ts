import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { RouterLink, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Sala } from '../../../../core/models';
import { SalaService } from '../../../../core/services/sala.service';

@Component({
  selector: 'app-sala-lista',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ContainerComponent, RouterLink],
  templateUrl: './sala-lista.html',
  styleUrl: './sala-lista.css'
})
export class SalaListaComponent implements OnInit {
  private salaService = inject(SalaService);
  private router = inject(Router);

  salas!: Observable<Sala[]>;

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
    this.salaService.excluir(id).subscribe(() => {
      this.carregarSalas();
    });
  }
}
