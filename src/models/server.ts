import express, {Request, Response} from 'express';
import routesVentas from '../routes/ventas';

class Server {
    private app: express.Application;
    private port: string;

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
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
    middlewares(){
        this.app.use(express.json);
    }
}

export default Server;