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

app.listen(port, () => {
    console.log(`Express Server running at http://localhost:${port}`);
});