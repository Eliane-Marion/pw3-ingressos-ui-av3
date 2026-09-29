import { Component, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  formSala = this.fb.group({
    id: [0],
    nome: [''],
    preco: [0]
  });

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    if (id) {
      this.salaService.buscarPorId(id).subscribe(sala => {
        this.formSala.patchValue(sala);
      });
    }
  }

  save(): void {
    this.salaService.salvar(this.formSala.value as any).subscribe(() => {
      this.router.navigate(['/salas']);
    });
  }
}
