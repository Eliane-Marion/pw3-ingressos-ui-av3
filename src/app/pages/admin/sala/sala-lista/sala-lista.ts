  import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { FormBuilder } from '@angular/forms';
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
export class SalaListaComponent implements OnInit{
  sala: Observable<Sala> = of();
  private SalaService = inject(SalaService);
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.sala = this.SalaService.buscarSalasPorId(id);
  }
}
