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
        let path = `./public/`; // дирректория
        fs.mkdirsSync(path); // с помощью библиотеки 'fs-extra' проверяем наличие указаннной дирретокрии, если ее нет, то создаем
        cb(null, path);
    },
    filename: function (req, file, cb) {
        let extensionFile = file.mimetype.match(/^(.*)\/([^/]*)$/)[2]; // расширение файла
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9); // имя файла
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extensionFile);
    }
});
const upload = multer({ storage: storage });
app.post('/file', upload.single('image'), (req, res) => {
    const file = req.file;
    const body = req.body;
    console.log('📢 [index.ts:80]', file, req.body.title);
    res.status(201).json({ file, body });
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// запрос 
// fetch('http://localhost:3000', {method:'GET'}).then(res => res.json()).then(json => console.log(json)) 
