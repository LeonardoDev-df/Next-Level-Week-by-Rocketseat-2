
// Servidor  ligar  node src/server.js    npm run dev  banco de dados node src/database/test.js
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')


//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

// configurar arquivos estaticos (css, scripts, imagens )
server
// receber os dados do rea.body
.use(express.urlencoded({ extended: true }))

.use(express.static("public"))
// rotas d aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start servidor
.listen(5500)

