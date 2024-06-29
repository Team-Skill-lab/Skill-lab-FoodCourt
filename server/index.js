const express = require('express');
const mongoose = require('mongoose');
const route = require('./route/route');
const PORT = 2500;
const app = express();

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/Users", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database Connected!!");
})
.catch((err) => {
    console.log(err.message);
});

app.use('/', route);

app.listen(PORT, () => {
    console.log(`Server running at Port: ${PORT}`);
});

