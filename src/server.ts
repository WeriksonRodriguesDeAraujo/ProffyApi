import express from 'express';
import cors from 'cors'
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);

// GET: Buscar ou listar uma informação.
// POST: Criar alguma nova informação.
// PUT: Atualizar uma informação existente.
// DELETE:  deletar uma informação existente.

// Corpo(Request Body): Dados para criação ou atualização de um registro.
// Route Params: indendificar qual recurso eu quero atualizar ou deletar.
// Query Params: Paginação, Filtro, Ordenação.
