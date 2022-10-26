require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');
const { limiter } = require('./constants/configConstants');
const cors = require('./middlewares/cors');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { DB_ADDRESS_DEV } = require('./constants/configConstants');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect(process.env.NODE_ENV === 'production' ? process.env.DB_ADDRESS : DB_ADDRESS_DEV, {
  useNewUrlParser: true,
});
app.use(helmet());
app.use(requestLogger);
app.use(limiter);
app.use(express.json());
app.use(cookieParser());
app.use(cors);
app.use('/', routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);
app.listen(PORT);
