import { DatabaseManager } from "./databasemanager";
import { filterArray } from '../utils/utils';

export class databaseDrive extends DatabaseManager {
    private data = [];
    private objectInstance = [];
    public uniqueKeys = [];
    constructor() {
        super();
    }

    get object() {
        return this.objectInstance;
    }

    all() {
        return this.database;
    }

    /**
     * 
     * @param object object to insert on DB
     * @returns 
     */
    create(object) {
        // FIX: quebrando o princípio de responsabilidade Unica.
        let filteredObjects = this.uniqueKeys.map((value, index, arr) => {
            let filterObject = `{"${value}": "${object[value]}"}`;
            let match = filterArray(this.database, JSON.parse(filterObject));
            return match;
        });
        filteredObjects = filteredObjects.filter(e => !!e && e.length > 0);

        if (filteredObjects.length > 0)
            return { message: 'campo duplicado no banco', status: 400, data: [] };

        let veiculo: any = object;
        let id = this.database.length + 1;
        veiculo = Object.assign({ id }, object);
        this.database.push(veiculo);
        this.applyTransaction();
        return { data: veiculo, message: 'criado com sucesso', status: 200 };
    }

    find(filterObject) {
        this.data = filterArray(this.database, filterObject);
        return this;
    }

    findOne(filterObject) {
        let data = filterArray(this.database, filterObject);
        this.objectInstance = data;
        return this;
    }

    update(updatedObject) {
        let objectInstanceIndex = this.database.indexOf(this.objectInstance[0]);
        Object.keys(updatedObject).forEach(k => {
            this.database[objectInstanceIndex][k] = updatedObject[k];
        });
        this.applyTransaction();
        return { status: 200, message: 'atualizado com sucesso!', data: this.database[objectInstanceIndex] };
    }

    delete() {
        if (this.data.length == 0) return false;
        this.data.forEach((item: any) => {
            let index = this.database.indexOf(item);
            this.database.splice(index, 1);
            this.applyTransaction();
        });
        return true;
    }
}