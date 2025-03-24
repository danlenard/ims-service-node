import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from "cors";
import { sequelize } from './db';
import routes from './routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// IMS API Routes
app.use('/api/ims', routes);


sequelize.sync()
  .then(() => console.log('Database connected and synced'))
  .catch((err) => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`IMS Subscriber Service running on port ${PORT}`);
});