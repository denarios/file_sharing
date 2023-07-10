import express from 'express';
import router from './routes/routes.js';
import DBConnection from './database/db.js';
const app = express();
app.use('/',router);
DBConnection();
app.listen(8000, () => {
    console.log('server is running at port 8000');
});