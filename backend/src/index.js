import express from 'express'
import mysql2 from 'mysql2'


const app = express()
const port = 9090


app.get('/', (req,res) => {
    res.send('Hallo ini dari server test-git')
})


app.get('/about', (req,res) => {
    res.send(`Ini AKu yg lagi berjalan pada server lokal dengan memakai port ${port}`)
})

app.get('*catchall', (req,res) => {
    res.status(404).send('Error 404, link tidak bisa ditemukan!')
})


app.listen(port, () => {
    console.log(`Server http://localhost:${port} sedang jalan...`)
})