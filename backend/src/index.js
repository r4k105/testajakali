import express from 'express'
import mysql2 from 'mysql2'


const app = express()
const port = 9090


app.get('/', (req,res) => {
    res.send('Hallo ini dari server test-git')
})

app.listen(port, () => {
    console.log(`Server http://localhost:${port} sedang jalan...`)
})