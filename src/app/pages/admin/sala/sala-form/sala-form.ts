import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SalaService } from '../../../../core/services/sala.service';


@Component({
  selector: 'app-sala-form',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, ContainerComponent, ReactiveFormsModule],
  templateUrl: './sala-form.html',
  styleUrl: './sala-form.css'
})
export class SalaFormComponent {
  private fb = inject(FormBuilder);

  formSala = this.fb.group({
    id: [0],
    nome: [''],
    preco: [0]
  });

  save(): void{
    console.log(this.formSala.value);
  }

}
