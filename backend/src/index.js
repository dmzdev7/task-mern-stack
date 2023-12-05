import app from './app.js';
import { connectDB } from './db/db.js';

connectDB();

app.listen(3000, () => {
	console.log('>>>> Server is running on port: 3000 => http://localhost:3000/');
});
