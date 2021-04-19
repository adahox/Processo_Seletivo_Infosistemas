import express from 'express';
import routes from './routes/routes';
// import cors from './routes/cors';
import cors from 'cors';
class App {
    public app: express.Application;
    public database;
    constructor() {
        this.app = express();
        this.middleware();
    }
 
    private middleware()  {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use('/veiculo', routes)
    }
} 
export default new App().app;