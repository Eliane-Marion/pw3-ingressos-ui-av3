import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import type { Sala } from '../../../../core/models';
import { SalaService } from '../../../../core/services/sala.service';


@Component({
  selector: 'app-sala-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ContainerComponent, ReactiveFormsModule],
  templateUrl: './sala-form.html',
  styleUrl: './sala-form.css'
})
export class SalaFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  private salaService = inject(SalaService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  edicao = false;

  formSala = this.fb.group({
    id: [0],
    nome: [''],
    preco: [0]
  });

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);

    if (id) {
      this.edicao = true;
      this.salaService.buscarPorId(id).subscribe({
        next: (sala) => this.formSala.patchValue({
          id: sala.id,
          nome: sala.nome ?? '',
          preco: sala.preco ?? 0
        }),
        error: (erro) => console.error('Erro ao carregar a sala', erro)
      });
    }
  }

  save(): void{
    const sala: Sala = {
      id: this.formSala.value.id ?? 0,
      nome: this.formSala.value.nome ?? '',
      preco: this.formSala.value.preco ?? 0
    };

    this.salaService.salvar(sala).subscribe({
      next: () => this.router.navigate(['/salas']),
      error: (erro) => console.error('Erro ao gravar a sala', erro)
    });
  }

}
