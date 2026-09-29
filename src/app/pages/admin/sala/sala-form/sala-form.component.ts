import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalaService } from '../../../../core/services/sala.service';

@Component({
  selector: 'app-sala-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sala-form.component.html',

})
export class SalaFormComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly salaService = inject(SalaService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  formSala: FormGroup = this.fb.group({
    id: [null],
    nome: ['', Validators.required],
    preco: [0, [Validators.required, Validators.min(0)]]
  });

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.salaService.buscarPorId(+id).subscribe({
        next: (sala) => this.formSala.patchValue(sala),
        error: (err) => console.error('Erro ao carregar sala:', err)
      });
    }
  }

  save(): void {
    if (this.formSala.valid) {
      this.salaService.salvar(this.formSala.value).subscribe({
        next: () => this.router.navigate(['/salas']),
        error: (err) => console.error('Erro ao salvar sala:', err)
      });
    }
  }
}