const express = require('express')
const app = express()
const cors = require('cors');
const data = require('./database/data.json')

app.use(express.json());
app.use(cors())

app.get('/properties', async (req, res) => {
    res.json(data);
});

app.listen(8000, () => {
    console.log("server started on port 8000");
})