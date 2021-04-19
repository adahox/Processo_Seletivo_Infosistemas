import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from 'src/app/services/utils.service';
import { VeiculosService } from '../../veiculos.service';

@Component({
  selector: 'app-novo-veiculo',
  templateUrl: './novo-veiculo.component.html',
  styleUrls: ['./novo-veiculo.component.scss']
})
export class NovoVeiculoComponent implements OnInit {

  public editarVeiculoForm: FormGroup = this.fb.group({
    id: new FormControl(),
    ano: new FormControl(),
    placa: new FormControl(),
    marca: new FormControl(),
    modelo: new FormControl(),
    chassi: new FormControl(),
    renavam: new FormControl(),
  });

  constructor(private fb: FormBuilder, private veiculoService: VeiculosService, private route: ActivatedRoute, private rt: Router, private utils: UtilsService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.veiculoService.adicionarVeiculo(this.editarVeiculoForm.value).subscribe((v: any) => {
      if (v.data) {
        setTimeout(() => {
          this.rt.navigate(['/veiculos']);
        }, 5000);
      }      
      this.editarVeiculoForm.reset();
    });
  }

}
