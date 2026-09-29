import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { RouterLink } from "@angular/router";
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
  private salas = inject(SalaService);
  Salas:Observable<Sala[]> = this.salas.listarSalas();


}


