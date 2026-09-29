import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-sala-lista',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, ContainerComponent, RouterLink],
  templateUrl: './sala-lista.html',
  styleUrl: './sala-lista.css'
})
export class SalaListaComponent {

    salaLista: Observable<Sala> = of();
    private salaService = inject(SalaService);
    private route = inject(ActivatedRouter);
  
      ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.salaLista = this.salaService.ListarSalasAtivas();

  }
}
