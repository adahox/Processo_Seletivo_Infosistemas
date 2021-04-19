import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe } from 'rxjs';
import { delay } from 'rxjs/operators';
import { UtilsService } from 'src/app/services/utils.service';
import { VeiculosService } from '../../veiculos.service';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  public success_edit = false;

  public editarVeiculoForm: FormGroup = this.fb.group({
    id: new FormControl(),
    ano: new FormControl(),
    placa: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),
    chassi: new FormControl(),
    renavam: new FormControl(),
  });


  constructor(private fb: FormBuilder, private veiculoService: VeiculosService, private route: ActivatedRoute, private rt: Router, private utils: UtilsService) {
    let id = this.route.snapshot.params['id'];
    console.log('id', id);
    this.veiculoService.getVeiculoById(id).subscribe((v: any) => {

      let veiculo = v.data[0];
      this.editarVeiculoForm.patchValue(veiculo);
    });
  }


  ngOnInit(): void {
  }

  onSubmit(): void {
    this.veiculoService.updateVeiculo(this.editarVeiculoForm.value).subscribe((v: any) => {

      if (v.data) {
        this.success_edit = true;
        setTimeout(() => {
          this.rt.navigate(['/veiculos']);
        }, 5000);

      }


      
      this.editarVeiculoForm.reset();
    });
  }
}
