const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

const userRouter = require('./routes/users');
app.use('/users', userRouter);

const postsRouter = require('./routes/posts.js');
app.use('/posts', postsRouter);

app.listen(3000);