const express = require('express');
const app = express();
const router = require('express').Router();
const routes = require('./controllers/index')

const PORT = process.env.PORT || 3001;




app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




app.use(routes)

app.listen(PORT, () => console.log('Now listening'));
