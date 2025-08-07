import express from 'express';
import bodyParser from 'body-parser';
import policyRoutes from './routes/policy.routes.js';
import './models/policy.model.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/policies', policyRoutes);

app.listen(PORT, () => {
  console.log('Servidor OK en http://localhost:${PORT}');
});