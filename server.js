const { log } = require('console')
const express = require('express')
const app = express()
const cors = require('express')
const { errorhandler } = require('./Middlewares/errorhandler')
app.use(cors({origin:'*'}))
require('dotenv').config()

app.use('/api/questions',require('./Routes/questionsRoutes'))
app.use('/api/options',require('./Routes/optionRoutes'))
app.use('/api/answers',require('./Routes/answerRoutes'))

app.use(errorhandler)
app.listen(process.env.PORT , () => console.log('server is running'))


