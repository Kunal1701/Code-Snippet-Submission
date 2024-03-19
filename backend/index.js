const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const codeRoutes = require('./routes/codeRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', codeRoutes);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
