const express = require('express');
const router = express.Router();
const { handleRPC } = require('./supabase.js');

//GENRES
app.get('/api/genres', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_genres', {});
    if (error) {
        res.status(500).send(error.message);
    }
    else {
        res.send(data);
    }
});

app.get('/api/genres/:ref', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_genre_by_id', {genre_id: req.params.ref});
    if (error) {
        res.status(500).send(error.message);
    }
    else {
        res.send(data);
    }
});

app.get('/api/genres/painting/:ref', async (req, res) => {
    const {data, error} = await supabase
        .rpc('genre_in_painting', {painting_id: req.params.ref});
    if (error) {
        res
            .status(500)
            .send(error.message);
    }
    else {
        res.send(data);
    }
});