import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { Router, RouterLink } from "@angular/router";
import { SalaService } from '../../../../core/services/sala.service';
import { Observable } from 'rxjs';
import { Sala } from '../../../../core/models';


@Component({
  selector: 'app-sala-lista',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ContainerComponent, RouterLink],
  templateUrl: './sala-lista.html',
  styleUrl: './sala-lista.css'
})
export class SalaListaComponent {

  private salaService =  inject(SalaService);
  private router = inject(Router);
  
  salas$: Observable<Sala> = this.salaService.listar();

    trackById(index: number, item: Sala): number | undefined{
    return item.id;
  }

  editar(id: number): void{
    this.router.navigate(['/salas', id]);
  }

  excluir(id: number): void{
    this.salaService.excluir(id).subscribe({
      next: () => {
        this.salas$ = this.salaService.listar();
      }
    });
  }



  
}
