import fs from 'fs';

export class DatabaseManager {

    private _database = [];
    private databasePath = '';
    constructor(databasePath: string = 'data/db.json') {
        this.databasePath = databasePath;
        let content = JSON.parse(fs.readFileSync(databasePath, { encoding: 'utf8' }));
        this._database = content.database;
    }

    get database() {
        return this._database;
    }

    set database(database) {
        this._database = database;
    }

    applyTransaction() {
        let superset = { database: this.database };
        fs.writeFileSync(this.databasePath, JSON.stringify(superset));
    }

}
