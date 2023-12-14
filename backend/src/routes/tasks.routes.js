import { Router } from 'express';
import { auth } from '../middleware/auth.middleware.js';
import {
	createTask,
	deleteTask,
	getTask,
	getTasks,
	updateTask,
} from '../controllers/tasks.controller.js';
import { validateSchema } from '../middleware/validator.middleware.js';
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema.js';

const router = Router();

router.get('/tasks', auth, getTasks);
router.get('/tasks/:id', auth, getTask);
router.post('/tasks', auth, validateSchema(createTaskSchema), createTask);
router.put('/tasks/:id', auth, validateSchema(updateTaskSchema), updateTask);
router.delete('/tasks/:id', auth, deleteTask);

export default router;
