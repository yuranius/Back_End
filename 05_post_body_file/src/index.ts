import express from 'express'
import { type } from 'os';
const app = express()
const port = 3000

let fs = require('fs-extra');

const jsonBodyMiddleware = express.json()

app.use(jsonBodyMiddleware)

const multer  = require('multer')
//const upload = multer({ dest: 'uploads/' })

const storage = multer.diskStorage({
  destination: function (req:any, file:any, cb:any) {
    // cb( null, '/ReactJs')
    let path = `./public/`; // дирректория
    fs.mkdirsSync(path); // с помощью библиотеки 'fs-extra' проверяем наличие указаннной дирретокрии, если ее нет, то создаем
    cb(null, path);
  },
  filename: function (req:any, file:any, cb:any) {

    let extensionFile = file.mimetype.match(/^(.*)\/([^/]*)$/)[2] // расширение файла

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) // имя файла

    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + extensionFile)
  }
})

const upload = multer({ storage: storage  })


type Props = {
  req: any,
  res: any,
}

app.post('/file', upload.single('image'), ({body, file}:any , res) => {
  console.log('📢 [index.ts:80]', file, body.title);
  res.status(201).json({file, body})
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// запрос 
// fetch('http://localhost:3000', {method:'GET'}).then(res => res.json()).then(json => console.log(json)) 