import { Component, OnInit } from '@angular/core';
import { VeiculosService } from './veiculos.service';
import { Veiculo } from './veiculo.class'
import { Router } from '@angular/router';
@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.scss']
})
export class VeiculosComponent implements OnInit {

  public veiculos: Array<Veiculo>;
  public deleteMessage: string;
  public deleteClass:string;
  public deleted: boolean = false;
  constructor(private veiculoService: VeiculosService, private rt: Router) { }

  ngOnInit(): void {
    this.veiculoService.getAllVeiculos().subscribe((veiculosList: any) => {
      this.veiculos = veiculosList.data;
    });
  }

  confirmDelete(veiculo) {
    if ( confirm(`Deseja excluir o item Marca: ${veiculo.marca}\r\nModelo: ${veiculo.modelo}\r\nPlaca:${veiculo.placa}\r\n`) ) {
      this.veiculoService.removerVeiculo(veiculo.id).subscribe((veiculo: any) => {
        this.deleteClass = veiculo.success ? 'success' : 'danger';
        this.deleteMessage = veiculo.success ? 'Item removido com sucesso' : 'Erro ao remover item';
        this.deleted = true;
        this.veiculoService.getAllVeiculos().subscribe((veiculosList: any) => {
          this.veiculos = veiculosList.data;
        });
      });
    }
  }
}
