import express, {Request, Response} from 'express';
import routesVentas from '../routes/ventas';
import db from '../db/connection';

class Server {
    private app: express.Application;
    private port: string;

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Running at port ${this.port}`)
        })
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: "Api working"
            })
        })
        this.app.use('/api/ventas', routesVentas)
    }
    midlewares(){
        this.app.use(express.json());
    }

    async dbConnect(){
        await db.authenticate();
        console.log('Base de datos conectada');
    }
}

export default Server;