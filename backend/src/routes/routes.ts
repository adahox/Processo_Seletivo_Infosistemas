import { Router } from 'express';
import VeiculoController from '../controllers/VeiculoController';

class Route {
    public routes: Router = Router();
    constructor() {
        const veiculo = new VeiculoController;
        this.routes.get('/', veiculo.index);
        this.routes.get('/:id', veiculo.getVeiculoById);
        this.routes.post('/', veiculo.create);
        this.routes.patch('/:id', veiculo.update);
        this.routes.delete('/:id', veiculo.remove);
    }
}
export default new Route().routes;