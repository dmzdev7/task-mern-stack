import { Router } from 'express';
import { authRequired } from '../middleware/validateToken.js';
import {
	createTasks,
	deleteTasks,
	getTask,
	getTasks,
	updateTasks,
} from '../controllers/tasks.controller.js';
import { validateSchema } from '../middleware/validator.middleware.js';
import { createTaskSchema, updateTaskSchema } from '../schemas/task.schema.js';

const router = Router();

router.get('/tasks', authRequired, getTasks);
router.get('/tasks/:id', authRequired, getTask);
router.post(
	'/tasks',
	authRequired,
	validateSchema(createTaskSchema),
	createTasks
);
router.put(
	'/tasks/:id',
	authRequired,
	validateSchema(updateTaskSchema),
	updateTasks
);
router.delete('/tasks/:id', authRequired, deleteTasks);

export default router;
