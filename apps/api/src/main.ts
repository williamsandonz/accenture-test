import * as express from 'express';
import * as helmet from 'helmet';
import * as cors from 'cors';
import { getTodosRoutes } from './routes/todos/todos.routes';
import { getTodoRoutes } from './routes/todo/todo.routes';
import { errorHandler, todoDataService } from './common';
import { exceptionService } from './common/providers/exception.service';
import { config } from './config';

process.on('unhandledRejection', (reason: Error, p) => exceptionService.handle(reason));
process.on('uncaughtException', (e) => exceptionService.handle(e));

todoDataService.onAppInit();

const app = express();
const router = express.Router();

app.use(cors({ origin: config.corsAllow}));

app.use(helmet());
app.use(require('body-parser').json());
app.use('/todos', getTodosRoutes(router));
app.use('/todo', getTodoRoutes(router));
app.use(errorHandler);

const port = 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port);
});
server.on('error', console.error);
