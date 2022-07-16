"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.sendStatus(404);
});
app.get('/courses', (req, res) => {
    res.json([
        { id: 1, title: "front-end" },
        { id: 2, title: "back-end" },
        { id: 3, title: "yuranius" },
        { id: 4, title: "css" },
        { id: 5, title: "reactjs" }
    ]);
});
app.get('/courses/:id', (req, res) => {
    const foundCourses = [
        { id: 1, title: "front-end" },
        { id: 2, title: "back-end" },
        { id: 3, title: "yuranius" },
        { id: 4, title: "css" },
        { id: 5, title: "reactjs" }
    ].find(c => c.id === +req.params.id);
    res.json(foundCourses);
    if (!foundCourses) {
        res.sendStatus(404);
        return;
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// запрос 
// fetch('http://localhost:3000', {method:'GET'}).then(res => res.json()).then(json => console.log(json)) 
