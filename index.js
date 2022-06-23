const express = require('express');
const app = express();
const { create } = require('express-handlebars');

const hbs = create({
    extname: 'hbs',
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true
    },
    helpers: {
        title: 'Students'
    }
});

// Register `hbs.engine` with the Express app.
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importing routes
const homeRouter = require('./routes/home');
const apiRouter = require('./routes/api');

// routing
app.use('/', homeRouter);
app.use('/api', apiRouter);

const PORT = process.env.PORT || 4000;

try {
    require('./helper/db')();
    app.listen(PORT, () => {
        console.log('Server listen on port ' + PORT);
    });
} catch (error) {
    console.log(error);
}