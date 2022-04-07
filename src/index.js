
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log("Program successfully executed at port " + port)
})