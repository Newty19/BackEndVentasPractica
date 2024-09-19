import express, {Request, Response} from 'express';
import cors from 'cors';
import routesVentas from '../routes/ventas';
import routesProductos from '../routes/productos';
import routesClientes from '../routes/clientes';
import routesTipoClientes from '../routes/tipoClientes';
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
        this.app.use('/api/ventas', routesVentas);
        this.app.use('/api/productos', routesProductos);
        this.app.use('/api/cliente', routesClientes);
        this.app.use('/api/tipoCliente', routesTipoClientes);
    }
    midlewares(){
        this.app.use(express.json());

        this.app.use(cors());
    }

    async dbConnect(){
        await db.authenticate();
        console.log('Base de datos conectada');
    }
}

export default Server;