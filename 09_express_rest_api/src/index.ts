import express from 'express'
const app = express()
const port = 3000

const jsonBodyMiddleware = express.json()

app.use(jsonBodyMiddleware)


const db = {
  courses: [
    { id: 1, title: "front-end" },
    { id: 2, title: "back-end" },
    { id: 3, title: "yuranius" },
    { id: 4, title: "css" },
    { id: 5, title: "reactjs" }
  ]
}



app.get('/', (req,res) => {
  res.send({message: ' Смотри другие брейк-поинты '})
})


// поиск по названию курса
app.get('/courses', (req, res) => {

    let foundCourses =  db.courses;

    // проверяем есть ли параметр в запросе
    if (req.query.title) {
        foundCourses = foundCourses.filter(c =>
            c.title.indexOf( req.query.title as string ) > -1)
    }


    res.json (foundCourses)
})


app.get('/courses/:id', (req, res) => {
 db.courses.find(c => c.id === Number(req.params.id)) // ищем в массиве данных элемент с ID, указанным в :id, предварительно преобразовав :id, в число (можно еще так +req.params.id)


  if(!db.courses){
    res.status(404).json( {message: "Курс не найден"} )
    return
  }
  res.status(201).json (db.courses)

})

app.post('/courses', (req,res) => {

    console.log( '📌:',req.body,'🌴 🏁')
    
    
    const createdCourse = {
        id: +(new Date()),
        title: req.body.title
    }
    db.courses.push(createdCourse)

    res.status(201).json(createdCourse)
})

app.delete('/courses/:id', (req, res) => {
    db.courses = db.courses.filter(c => c.id !== Number(req.params.id)) // ищем в массиве данных элемент с ID, указанным в :id, предварительно преобразовав :id, в число (можно еще так +req.params.id)
    res.status(201).json({message: "Удалено!!!"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// запрос 
// fetch('http://localhost:3000', {method:'GET'}).then(res => res.json()).then(json => console.log(json)) 