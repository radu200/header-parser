const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
//Create instance of expresss
const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 9000;

app.get('/', (req,res) => {
    let language = req.acceptsLanguages();
    let software = req.headers['user-agent'];
    let ip = req.ip; 

    res.json({'ip':ip,'software':software, 'language': language})
})




app.listen(port, () => {
  console.log(`app is running at ${port}`);
})


