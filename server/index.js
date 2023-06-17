const express = require('express');
const app = express();
const port = 3001;
const db = require('./models');
const route = require('./routes/index');
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})

route(app);