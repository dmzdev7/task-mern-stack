import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import tasksRoutes from './routes/tasks.routes.js';

const app = express();

//* Rastreo de peticiones
app.use(morgan('dev'));
app.use(
	cors({
		origin: 'http://localhost:5173',
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser());

//* Rutas
app.use('/api', authRoutes);
app.use('/api', tasksRoutes);

export default app;
