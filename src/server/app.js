import express from 'express';
import cors from 'cors';
import './config/db.js';
import mainRoute from './routes/mainRoute.js';

const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.use('/', mainRoute);

app.listen(3000, () => {
  console.log('Server running on port 3000')
});



