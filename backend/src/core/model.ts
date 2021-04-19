import { databaseDrive } from "./databaseDriver";
import { IModel } from '../interface/IModel'

export class Model extends databaseDrive implements IModel {

    public uniqueKeys = []; 

    constructor() { 
        super();
    }
} 