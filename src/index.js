import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from '../routes/users.js';

dotenv.config({ path: '../.env'});

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
    res.send('Hello from hompage');
})

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));