const express = require('express');
const router = express.Router();
const { handleRPC } = require('./supabase.js');

//PAINTINGS
app.get('/api/paintings', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_paintings', {});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/paintings/sort/:value', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_paintings_custom_sort', {sort: req.params.value});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/paintings/:ref', async (req, res) => {
    const {data, error} = await supabase
        .rpc('painting_by_ref', {painting_id: req.params.ref});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/paintings/search/:substring', async (req, res) => {
    const {data, error} = await supabase
        .rpc('painting_by_substring', {given_substring: req.params.substring});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/paintings/years/:start/:end', async (req, res) => {
    const {data, error} = await supabase
        .rpc('painting_between_years', {start_year: req.params.start, end_year: req.params.end});
    if (error) {
        res
            .status(500)
            .send(error.message);
    }
    else {
        res.send(data);
    }
});

app.get('/api/paintings/galleries/:ref', async (req, res) => {
    const {data, error} = await supabase
        .rpc('painting_by_gallery_id', {gallery_id: req.params.ref});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/paintings/artists/:ref', async (req, res) => {
    const {data, error} = await supabase
        .rpc('painting_by_artist_id', {artist_id: req.params.ref});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/paintings/artists/country/:country', async (req, res) => {
    const {data, error} = await supabase
        .rpc('painting_by_country', {country: req.params.country});
    if (error) {
        res
            .status(500)
            .send(error.message);
    }
    else {
        res.send(data);
    }
});

app.get('/api/paintings/era/:ref', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_paintings_by_era', {era_id: req.params.ref});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/paintings/genre/:ref', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_paintings_by_genre', {genre_id: req.params.ref});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

