import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import { FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { SalaService } from '../../../../core/services/sala.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Sala } from '../../../../core/models';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-sala-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ContainerComponent, ReactiveFormsModule],
  templateUrl: './sala-form.html',
  styleUrl: './sala-form.css'
})
export class SalaFormComponent {
  sala: Observable<Sala> = of();
  private fb = inject(FormBuilder);
  private salaService = inject(SalaService);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  formSala = this.fb.group({
    id: [0],
    nome: [''],
    preco: [0]
  });

  ngOnInit(): void {
     const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.sala = this.salaService.buscarSalaPorId(id);
    }
  }

  save(): void{
    this.salaService.salvarSala(this.formSala.value as any).subscribe({
      next: () => this.router.navigate(['/salas']) 
    });
  }

}
