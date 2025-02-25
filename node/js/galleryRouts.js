const express = require('express');
const router = express.Router();
const { handleRPC } = require('./supabase.js');


app.get('/api/eras', async (req, res) => {
    const {data, error} = await supabase
        .rpc('Retrieve_Era_Names');
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/galleries', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_galleries', {});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/galleries/:ref', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_gallery_by_id', {gallery_id: req.params.ref});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});



app.get('/api/galleries/country/:substring', async (req, res) => {

    const {data, error} = await supabase
        .rpc('get_galleries_by_country', {country_substring: req.params.substring});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
})