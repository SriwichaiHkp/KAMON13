const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();
const port = 3000;

// URL ของ Sheety API
const sheetyUrl = 'https://api.sheety.co/3c1a48deb5bbded0b2117ecce485d6eb/schoolTest/sheet1';

// Middleware
app.use(bodyParser.json());

// Endpoint สำหรับดึงข้อมูลจาก Sheety
app.get('/api/sheet-data', async (req, res) => {
    try {
        const response = await axios.get(sheetyUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดในการดึงข้อมูลจาก Sheety', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
