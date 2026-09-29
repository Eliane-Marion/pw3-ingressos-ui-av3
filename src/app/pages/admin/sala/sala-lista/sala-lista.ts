import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import { Sala } from '../../../../core/models';
import { SalaService } from '../../../../core/services/sala-service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-sala-lista',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ContainerComponent, RouterLink],
  templateUrl: './sala-lista.html',
  styleUrl: './sala-lista.css'
})
export class SalaListaComponent {

  sala: Observable<Sala> = of();
  private route = inject(ActivatedRoute);
  private salaService = inject(SalaService);
  private router = inject(Router);

  salas!: Observable<Sala[]>;

  ngOnInit(): void {
    this.trazerSalas();
  }

  trazerSalas(): void {
    this.salas = this.salaService.listarSalas();
  }

  editar(id: number): void {
    this.router.navigate(['/salas', id, 'editar']);
  }

  excluir(id: number): void {
    this.salaService.inativarSala(id).subscribe(() => {this.trazerSalas();});
  }
  
}
