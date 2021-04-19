import { Injectable } from '@angular/core';
import { HttpService } from '../services/http.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VeiculosService extends HttpService {

  private path: string = 'veiculo';

  constructor(public http: HttpClient) {
    super(http);
  }

  getAllVeiculos() {
    return this.get(`${this.path}`);
  }

  adicionarVeiculo(veiculo) {
    return this.post(`${this.path}`, veiculo);
  }

  getVeiculoById(id) {
    return this.get(`${this.path}/${id}`);
  }

  updateVeiculo(veiculo) {
    let id = veiculo.id;
    return this.patch(`${this.path}/${id}`, veiculo);
  }

  removerVeiculo(veiculoId) {
    return this.delete(`${this.path}/${veiculoId}`);
  }
}
