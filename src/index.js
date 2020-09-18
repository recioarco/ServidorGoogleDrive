const express = require('express');
const router = require('../routes/routes');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router(app);

app.listen(port, () => `Server running on port ${port}`);
