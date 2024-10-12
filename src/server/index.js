const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'));

app.post('/analyze', async (req, res) => {
    const text = req.body.text;
    try {
        const response = await axios.post(`https://api.meaningcloud.com/sentiment-2.1`, null, {
            params: {
                key: process.env.API_KEY,
                txt: text,
                lang: 'en',
            },
        });
        res.send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
