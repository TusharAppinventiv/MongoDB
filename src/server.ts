import express from 'express';
import { connectToDatabase } from './database/database';


const app = express();
app.use(express.json())

connectToDatabase();

const port = 3000;
app.listen(port,async()=>{
    console.log('listening on 3000');
  
});