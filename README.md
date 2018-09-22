# js-based Private Blockchain with web API

## Requirements:

* Node.js installed
* Web browser
* Terminal (such as Git Bash)

## How to run locally:

After downloading this repo, start a terminal session, navigate to the directory of the downloaded repo, and run the following command:

```
node app.js
```

The web API is configured to run on port 8000, so open a web browser tab and navigate to: [localhost:8000](http://localhost:8000)


## Files:

app.js - web API using the express.js framework
blockClass.js - block class <br>
blockchainClass.js - blockchain class <br>
levelFunctions.js - contains all functions using levelDB <br>
privateBlockchain.js - contains loop to add blocks, corrupt blocks, and test <br>

## Folders:

chainData - contains the current chain data <br> 
chaindata_allGood - contains a set of 10 valid blocks <br>
chaindata_B2inv - contains 10 blocks where block 2 is invalid <br>

## Dependencies:

* LevelDB
* crypto-js
* express.js
* http
* path
* body-parser

## ToDo

validateChain() asynchronous programming needs checking