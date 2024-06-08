import express from 'express';
import apostadoresRouter from './routes/apostadorRoute';
import encuentrosRouter from './routes/encuentroRoute';
import pronosticosRouter from './routes/pronosticoRoute';

const app = express();

app.use(express.json());

app.use('/apostadores', apostadoresRouter);
app.use('/encuentros', encuentrosRouter);
app.use('/pronosticos', pronosticosRouter);

export default app;
