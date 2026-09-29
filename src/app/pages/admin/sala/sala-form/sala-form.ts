import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from '../../../../shared/components/container/container';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { SalaService } from '../../../../core/services/sala.service';
import { ActivatedRoute, Router} from '@angular/router';


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
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  formSala = this.fb.group({
    id: [0],
    nome: [''],
    preco: [0]
  });

  ngOnInit():void{
    const id = this.route.snapshot.params['id'];

    if(id){
      this.salaService.buscarPorSalaId(Number(id)).subscribe(sala => {this.formSala.patchValue(sala)});
    }

  }

  save(): void{
    console.log(this.formSala.value);

    this.salaService.Salvar(this.salaService as any).subscribe(() => {this.router.navigate(['/salas']);}
  );
  }

}
