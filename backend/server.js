const express = require('express')
const app = express()
const port = 3000
const connectDB = require("./db/dbConnection.js");
const User = require("./db/user.js");
const cors = require("cors");


//Midddleware for pass JSON
app.use(express.json());

//Enable CORS
app.use(cors())

//Registration
app.post('/registration', async(req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = new User({username,password})
    await user.save();
    res.status(201).json({ mes: "Registration Successful" })
  } catch (error) {
    res.status(500).json({ mes: "Registration FAILED" })
  }
});

//Login
app.post('/login',async(req,res)=>{
  try {
    const { username, password } = req.body;
    const user = await User.findOne({username});

    if(!user){
      res.status(401).json({ mes: "Invalid User" })
    }

    if(user.password !== password){
      res.status(401).json({ mes: "Invalid Password check your password" })
    }

    res.status(200).json({ mes: "Login Successfull" });

  } catch (error) {
    res.status(500).json({ mes: "Login FAILED.." })
  }
})


app.get('/', (req, res) => {
  res.send('Hello World')
});

app.get('/profile', (req, res) => {
  res.send('Hello USER')
});


connectDB();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});