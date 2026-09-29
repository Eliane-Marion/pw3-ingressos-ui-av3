import { Component, Inject, inject, OnInit} from '@angular/core'
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { from, Observable, of } from 'rxjs';
import { ContainerComponent } from '../../shared/components/container/container';
import type { Filme } from '../../core/models';
import { FilmeService } from '../../core/services/filme.service';

@Component({
  selector: 'app-detalhes',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule, ContainerComponent],
  templateUrl: './detalhes.html',
  styleUrl: './detalhes.css'
})
export class DetalhesComponent implements OnInit {

  filme: Observable<Filme> = of();
  private filmeService = inject(FilmeService);
  private route = inject(ActivatedRoute);


  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.filme = this.filmeService.buscarSessoesPorFilmeId(id);
  }
}
