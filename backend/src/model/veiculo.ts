import { Model } from "../core/model";

export class Veiculo extends Model {

    uniqueKeys = ['renavam', 'placa', 'id', 'chassi'];

    constructor() {
        super();
    }
}
