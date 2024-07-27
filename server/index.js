import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json()); // Add this line to parse JSON request bodies
app.use(express.static("public"));

app.post('/register', (req, res) => {
    console.log(req.body); // Log the request body
    console.log("hello");
    res.send("Received"); // Respond to the client
});

app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});
