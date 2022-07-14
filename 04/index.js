"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const express_1 = __importDefault(require("express"));

const app = (0, express_1.default)();
const port = 3000;


app.get('/', (req, res) => {
    let a = 4;
    if (a > 5) {
        res.send('ok');
    }
    else {
        res.send('Hello World!!!');
    }
});
app.get('/yuranius', (req, res) => {
    res.send('Hello Yuranius!!!');
});
app.post('/yuranius', (req, res) => {
    res.send('Created Yuranius!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
