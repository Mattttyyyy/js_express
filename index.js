

const express = require('express')
//import express module in the application
const app = express() // createServer()
// express() is the server stored in the variable app

const PORT = 5000;

// Middlewares 
// (The Parsers - for the incoming payloads to the reqbody)
app.use(express.json())
    //parses the data coming from forms
app.use(express.urlencoded({extended:true}))

//HANDLING ROUTES WITH HTTP METHOD
//syntax: app.method(<endpoint>, <request listener function>)


app.get('/', (req, res) => res.status(202).send("Hello from get route"))

//1. && //2.
app.get("/home", (req,res) => {
    res.send(`This is your home page`)
})

//3.
const user = [
    {
        "username":"poring117",
        "password":"lass123"
    },
    {
        "username":"poring118",
        "password":"rams123"
    }
];

//3. && //4.
app.get("/users", (req,res) => {
    res.send(user)
})

//5. && //6.

app.delete("/delete-users", (req, res) => {
    
    const {username, password} = req.body

    console.log(user);
    for(let i = 0; i < user.length; i++){
        if (username === user[i].username){
            username.splice(i, 1);
            res.send(`User ${username} has been deleted`)
            console.log(user);
        
            break;
        }
        else{
            res.send(`User not found`)
    
        }
       
    }

    })
    


// PORT 
    //from npm website
app.listen(PORT, () => console.log(`Server connected to port ${PORT}`))