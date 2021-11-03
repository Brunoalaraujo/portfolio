const express = require('express');
const app = express();

var path = require('path');

const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.static('public'))
app.use(express.json())
 

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../index.html'))
})

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`)
})