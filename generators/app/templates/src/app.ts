import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import TaskRoutes from './task/task.router';


class App {

  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    const routes = [ 
      TaskRoutes
    ];

    this.express.use('/', routes);
  }

}

export default new App().express;
