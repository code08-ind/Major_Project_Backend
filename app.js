const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
// const cookieParser = require("cookie-parser");
const app = express();
const PORT = process.env.PORT || 4050;

dotenv.config({ path: "./config.env" });

require('./db/conn.js');

app.use(express.json());
app.use(cors());
// app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//? model
const Company = require('./model/companySchema.js');

app.get('/companies', async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        console.log(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server Running At Port ${PORT}`);
});