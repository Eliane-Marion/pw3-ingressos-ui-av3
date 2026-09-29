import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { Sala } from '../../../../core/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sala-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ContainerComponent, ReactiveFormsModule],
  templateUrl: './sala-form.html',
  styleUrl: './sala-form.css'
})
export class SalaFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  salaForm: Observable<Sala> = of();
  private salaService = inject(SalaService);
  private route = inject(ActivatedRouter);

  formSala = this.fb.group({
    id: [0],
    nome: [''],
    preco: [0],
   
  });

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.salaForm = this.salaService.CriarUmaSala(id);

  }

  save(): void{
    console.log(this.formSala.Salvar())
  }

}
