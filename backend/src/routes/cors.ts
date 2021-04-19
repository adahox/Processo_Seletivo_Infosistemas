import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:4200/',
    optionsSuccessStatus: 200
}

const _cors = cors();

export default _cors;