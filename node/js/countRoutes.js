const express = require('express');
const router = express.Router();
const { handleRPC } = require('./supabase.js');

//Counts
app.get('/api/counts/topgenres/:ref' , async (req, res) => {
    const {data, error} = await supabase
        .rpc('top_genre_count', {min_num_paintings: req.params.ref});
    if (error) {
        res.status(500).send(error.message);
    }
    else {
        res.send(data);
    }
});

app.get('/api/counts/artists', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_artist_painting_counts', {});
    if (error) {
        res.status(500).send(error.message);
    }
    else {
        res.send(data);
    }
});

app.get('/api/counts/genres', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_number_of_paintings_by_genre', {});
    if (error) {
        res.status(500).send(error.message);
    }
    else {
        res.send(data);
    }
});