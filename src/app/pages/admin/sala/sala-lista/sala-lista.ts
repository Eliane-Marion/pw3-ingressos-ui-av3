import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { Router, RouterLink } from "@angular/router";
import { SalaService } from '../../../../core/services/sala.service';
import { Sala } from '../../../../core/models';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-sala-lista',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ContainerComponent, RouterLink],
  templateUrl: './sala-lista.html',
  styleUrl: './sala-lista.css'
})
export class SalaListaComponent {
  
  private salaService = inject(SalaService);
  private router = inject(Router);

  salas = this.salaService.listarAtivas();

  editar(id: Number): void {
    this.router.navigate(['/salas', id]);
  }

  excluir(id: Number): void {
    this.salaService.excluirSala(id).subscribe({
      next:() => { this.salas = this.salaService.listarAtivas();}});
  }
  
}
