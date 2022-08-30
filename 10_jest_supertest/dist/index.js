"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
let fs = require('fs-extra');
const jsonBodyMiddleware = express_1.default.json();
app.use(jsonBodyMiddleware);
const multer = require('multer');
//const upload = multer({ dest: 'uploads/' })
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // cb( null, '/ReactJs')
        let path = `./public/`;
        fs.mkdirsSync(path);
        cb(null, path);
    },
    filename: function (req, file, cb) {
        let extensionFile = file.mimetype.match(/^(.*)\/([^/]*)$/)[2]; // расширение файла
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extensionFile);
    }
});
const upload = multer({ storage: storage });
const db = {
    courses: [
        { id: 1, title: "front-end" },
        { id: 2, title: "back-end" },
        { id: 3, title: "yuranius" },
        { id: 4, title: "css" },
        { id: 5, title: "reactjs" }
    ]
};
app.get('/', (req, res) => {
    res.send({ message: ' Не верный запрос ' });
});
// поиск по названию курса
app.get('/courses', (req, res) => {
    let foundCourses = db.courses;
    // проверяем есть ли параметр в запросе
    if (req.query.title) {
        foundCourses = foundCourses.filter(c => c.title.indexOf(req.query.title) > -1);
    }
    res.json(foundCourses);
});
app.get('/courses/:id', (req, res) => {
    let course = db.courses.find(c => c.id === Number(req.params.id)); // ищем в массиве данных элемент с ID, указанным в :id, предварительно преобразовав :id, в число (можно еще так +req.params.id)
    if (!course) {
        res.status(404).json({ message: "Курс не найден" });
        return;
    }
    res.status(201).json(course);
});
app.post('/courses', upload.single('image'), (req, res) => {
    const file = req.file.filename;
    console.log('📢 [index.ts:80]', file, req.body.title);
    const createdCourse = {
        id: +(new Date()),
        title: file
    };
    db.courses.push(createdCourse);
    res.status(201).json(createdCourse);
});
app.delete('/courses/:id', (req, res) => {
    db.courses = db.courses.filter(c => c.id !== Number(req.params.id)); // ищем в массиве данных элемент с ID, указанным в :id, предварительно преобразовав :id, в число (можно еще так +req.params.id)
    res.status(201).json({ message: "Удалено!!!" });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// запрос 
// fetch('http://localhost:3000', {method:'GET'}).then(res => res.json()).then(json => console.log(json)) 
