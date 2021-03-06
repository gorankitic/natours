const mongoose = require('mongoose')
require('colors')
const dotenv = require('dotenv')

// process.on('uncaughtException', err => {
//     process.exit(1) // 1 is code for unhandled rejection
// })

dotenv.config({ path: './config.env' })
const app = require('./app')


const db = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)
mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database is connected successfully.'.green.underline)
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`.green.underline)
})

process.on('unhandledRejection', err => {
    server.close(() => {
        process.exit(1) // 1 is code for unhandled rejection
    })
})
