const fs = require('fs');
const express = require('express');


const app = express();

const products = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/products.json`));

app.get('/revive/v2/products', (req, res)=> {
    res.status(200).json({
        status: 'success',
        results: products.length,
        data: {
            products
        }
    });
})

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`)
})


