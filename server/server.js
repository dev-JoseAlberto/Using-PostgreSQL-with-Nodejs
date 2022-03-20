const express = require('express');
const app = express();
const port = 3000;

app.use('/', require('/route/post_route'));

app.listen(port);