"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginRouter = express_1.Router();
const dbApi = require("./dbApi");
loginRouter.post('/', (req, res) => {
    const { name, password } = req.body;
    dbApi.checkPassword(name, password)
        .then(result => {
        if (result)
            res.json({ 'success': true });
        else
            res.status(401).json({ 'error': 'Incorrect name or password' });
    });
});
exports.default = loginRouter;
//# sourceMappingURL=loginRouter.js.map