require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => res.send('FixIt Backend Running'));
app.listen(PORT, () => console.log(`Server on ${PORT}`));