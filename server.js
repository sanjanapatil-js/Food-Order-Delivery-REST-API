const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const foodRoutes = require('./routes/foodRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/foods', foodRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(Server running on port ${PORT});
});
