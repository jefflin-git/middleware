// app.js
const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

const logGenerator = require('./logGenerator')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(logGenerator)

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/new', (req, res) => {
    res.send('<h2>新增 Todo 頁面</h2><button><a href="/">返回列出全部 Todo</button></a>')
})

app.get('/:id', (req, res) => {
    res.send('<h2>顯示一筆 Todo</h2><button><a href="/">返回列出全部 Todo</a></button>')
})

app.post('/', (req, res) => {
    res.send('<h2>新增一筆  Todo</h2><button><a href="/">返回列出全部 Todo</a></button>')
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})