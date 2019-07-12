const express = require('express');

const app = express();
app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
