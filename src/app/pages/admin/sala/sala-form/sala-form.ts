import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SalaService } from '../../../../core/services/sala.service';
import { Sala } from '../../../../core/models/sala';

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

  formSala = this.fb.nonNullable.group({
    id: [0],
    nome: [''],
    preco: [0]
  });

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.salaService.buscarPorId(Number(id)).subscribe((sala) => {
        this.formSala.patchValue(sala);
      });
    }
  }

  save(): void {
    const sala: Sala = this.formSala.getRawValue();

    this.salaService.salvar(sala).subscribe(() => {
      this.router.navigate(['/salas']);
    });
  }
}
