import express from 'express';
import mysql2 from 'mysql2';


const app = express();
const port = 9090;


app.get('/', (req,res) => {
    res.send("Hello from the world");
});

app.get('users/:userID/books/:bookID', (req,res) => {
    res.send(`User ID: ${req.params.userID}, Book ID: ${req.params.bookID}`);
});

app.get('/about', (req,res) => {
    res.send("this about on api express")
})

app.get('*catchall', (req,res) => {
    res.status(400).send("404 error not found")
})

app.listen(port, () => {
    console.log(`Express Server running at http://localhost:${port}`);
});