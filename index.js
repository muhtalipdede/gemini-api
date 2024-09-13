const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const homeController = require('./controller/home');
const contentController = require('./controller/content');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', homeController.index);
app.post('/api/content/generate', contentController.generate);

app.use((req, res) => {
    res.status(404).send('Not found');
});


const PORT = process.env.PORT;

app.listen(PORT || 3000, () => {
    console.log('Server is running on port 3000');
});