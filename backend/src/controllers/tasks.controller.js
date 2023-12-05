import Task from '../models/tasks.model.js';

export const getTask = async (req, res) => {
	const task = await Task.findById(req.params.id).populate('user');

	if (!task) return res.status(404).json({ message: 'Task not found' });
	res.status(200).json(task);
};

export const getTasks = async (req, res) => {
	const tasks = await Task.find({
		user: req.user.id,
	}).populate('user');
	res.status(200).json(tasks);
};

export const createTasks = async (req, res) => {
	const { title, description, date } = req.body;

	const newTask = new Task({ title, description, date, user: req.user.id });

	const savedTask = await newTask.save();
	res.status(201).json(savedTask);
};

export const updateTasks = async (req, res) => {
	const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});

	if (!task)
		return res.status(404).json({ message: "Task couldn't be updated" });
	res.status(200).json(task);
};

export const deleteTasks = async (req, res) => {
	const task = await Task.findByIdAndDelete(req.params.id);

	if (!task)
		return res.status(404).json({ message: "Task couldn't be deleted" });
	res.sendStatus(204);
};
