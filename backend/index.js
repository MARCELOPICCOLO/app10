const app = require('./bin/config')
const port = 3000
const router = require('./router/router')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/api/wrdocs', router)


app.listen(port, ()=>{
    console.log("servidor rodando")
})