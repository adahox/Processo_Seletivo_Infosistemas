import { Model } from '../core/model';
import { Veiculo } from '../model/veiculo';
import * as express from 'express';
export default class VeiculoController {

    /**
     * 
     * @param req express Request
     * @param res express Response
     */
    index(req: express.Request, res: express.Response) {
        let veiculo = new Veiculo;
        let veiculos = veiculo.all();
        res.status(200).json({ data: veiculos });
    }
    /**
     * 
     * @param req express Request
     * @param res express Response
     */
    create(req: express.Request, res: express.Response) {
        let veiculo = new Veiculo;
        let novo = veiculo.create(req.body);
        res.status(novo.status).json(novo.data)
    }

    /**
     * 
     * @param req express Request
     * @param res express Response
     */
     getVeiculoById(req: express.Request, res: express.Response) {
        let id = parseInt(req.params.id);
        let model = new Veiculo;
        let veiculo = model.findOne({id: id}).object;
        if (!veiculo) return res.status(404).json({error: 'veículo não existe'});
        return res.status(200).json({data: veiculo});
    }


    /**
     * 
     * @param req express Request
     * @param res express Response
     */
    update(req: express.Request, res: express.Response) {
        let id = parseInt(req.params.id);
        let model = new Veiculo;
        let veiculo = model.findOne({id: id});
        if (!veiculo) return res.status(404).json({error: 'veículo não existe'});
        let updatedVeiculo = veiculo.update(req.body);
        return res.status(updatedVeiculo.status).json({data: updatedVeiculo.data});
    }
    /**
     * 
     * @param req express Request
     * @param res express Response
     */
    remove(req: express.Request, res: express.Response) {
        let veiculo = new Veiculo;
        let id = parseInt(req.params.id);
        let removed = veiculo.find({ id: id }).delete();
        res.status(removed ? 200 : 404).json({ success: removed });
    }
}
