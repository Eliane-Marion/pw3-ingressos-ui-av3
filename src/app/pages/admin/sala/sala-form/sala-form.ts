import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { SalaService } from '../../../../core/services/sala.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sala-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ContainerComponent, ReactiveFormsModule],
  templateUrl: './sala-form.html',
  styleUrl: './sala-form.css'
})
export class SalaFormComponent {
  private fb = inject(FormBuilder);
  private salaService = inject(SalaService);
  private activatedRouter = inject(ActivatedRoute);
  private router = inject(Router);

  formSala = this.fb.nonNullable.group({
    id: [0],
    nome: ['', Validators.required],
    preco: [0, Validators.required]
  });

  ngOnInit(): void{
    const id = this.activatedRouter.snapshot.paramMap.get('id');

    if(id){
      this.salaService.buscarPorId(Number(id)).subscribe(sala => {
        this.formSala.patchValue(sala);
      })
    }
  }

  save(): void{
    this.salaService.salvar(this.formSala.getRawValue()).subscribe(() => {
      this.router.navigate(['/salas']);
    })
  }

}
