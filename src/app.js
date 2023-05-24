const express = require('express');
const app = express();

require("../src/db/conn")

const Mensraking = require("../src/models/mens");
const router = require('./router/men');
const port = process.env.PORT|| 6000;

app.use(express.json());
app.use(router);

app.listen(port, () => {

    console.log(`connection is setup at ${port}`);
});
