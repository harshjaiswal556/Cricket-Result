
const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const path = require('path');
const templatePath = path.join(__dirname,"/templates")

app.set('view engine', 'hbs');
app.set("views", templatePath)
app.use(express.static(templatePath));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log("Program successfully executed at port " + port)
})