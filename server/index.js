import express from 'express';
import bodyparser from 'body-parser';
import cors from 'cors';
import pg from 'pg';
import session from 'express-session';

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "Shopdata",
    password: "jokofi",
    port: 5432,
});

db.connect()
  .then(() => {
    console.log('Connected to the database');
  })
  .catch(err => {
    console.error('Database connection error', err.stack);
  });

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static("public"));
app.use(session({
    secret: '14012002',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

app.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const result = await db.query("INSERT INTO register (name, password) VALUES ($1, $2)", [req.body.name, req.body.password]);
        console.log("Insertion result:", result);
        res.status(202).send("OK");
    } catch (err) {
        console.error('Error inserting data', err.stack);
        res.status(500).send('Error inserting data');
    }
});

app.post('/login',async(req,res)=>{
    console.log(req.body);
     try{
        console.log("login");
        const result=await db.query("SELECT * FROM register WHERE name = $1 AND password = $2 ",[req.body.name,req.body.password]);
        console.log(result);
        console.log(result.rows.length);
        if(result.rows.length>0){
            res.status(202).send("OK");
        }else{
            res.status(400).send("NO");
        }
     }catch(err){
        console.error('Error logging in', err.stack);
        res.status(500).send('Error login');
     }
});

app.get('/home',async(req,res)=>{
    try{
        console.log("home");
        const result=await db.query("SELECT * FROM products");
        console.log(result.rows);
        
        // let val=await JSON.stringify(result);
        // console.log([val]);
        res.status(202).json(result.rows);
    }catch(err){
        console.error(err);
    }
})
app.post('/sell',async(req,res)=>{
    console.log(req.body);
    try{
        console.log("sell");
        const result = await db.query("INSERT INTO products (product_name,image,price,location,quantity,description,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7)",[req.body.product,req.body.image,req.body.price,req.body.address,req.body.quantity,req.body.des,1]);
    }catch(err){
        console.error("Error: ",err);
    }
});
app.listen(port, () => {
    console.log(`Connected to port ${port}`);
});
