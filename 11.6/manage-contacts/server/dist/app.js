"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const contactsRouter_1 = require("./contactsRouter");
const loginRouter_1 = require("./loginRouter");
const app = express();
const corsOptions = {
    origin: /^http:\/\/localhost/
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/contacts', contactsRouter_1.default);
app.use('/login', loginRouter_1.default);
app.get('/', (req, res) => {
    res.send('hello');
});
app.get('*', (req, res) => {
    res.send('404');
});
app.listen(4000, () => {
    console.log('working');
});
//# sourceMappingURL=app.js.map