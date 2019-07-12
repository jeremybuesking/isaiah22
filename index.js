const express = require('express');

const app = express();
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

const port = process.env.port || 3000;
app.listen(port, () => { console.log(`Listening on port ${port}...`); });
