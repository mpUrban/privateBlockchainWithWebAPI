
//git remote add origin https://github.com/mpUrban/privateBlockchainWithWebAPI.git


const express = require('express');
const app = express();
const port = 8000;

const http = require('http');
const path = require('path');

const bodyParser = require('body-parser');

const Blockchain = require('./blockchainClass');
const Block = require('./blockClass');

// http://expressjs.com/en/guide/writing-middleware.html


// Syntax
// app.get('/', (req, res) => res.send('Hello World!'))
// '/' is the path on host
// req - client request
// res - server response


let blockchain = new Blockchain;


app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/home.html')));

app.get('/block/:id', async (req, res) => {
    const blockRes = await blockchain.getBlock(req.params.id);
    if (blockRes) {
        res.send(blockRes)
    } else {
        res.status(404).send("Block Not Found")
    }
});

//body parser allows form data to be available in req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/block', async (req, res) => {
    console.log('----------------------------');
    console.log('Adding body data of: ' + (req.body.data));
    if (!req.body.data) {
        res.status(400).json({
            "status": 400,
            message: "Body data must not be empty"
        })
    }
    else {
        await blockchain.addBlock(new Block(req.body.data));
        const height = await blockchain.getBlockHeight();
        const response = await blockchain.getBlock(height);
        res.send(response);
    }
});


// redirect to home - needs to be final redirect
// app.get('*', function (req, res) {
//     res.redirect('/');
// });

app.listen(port,
    () => console.log(`app listening on port ${port}!`));
