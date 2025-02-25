const express = require('express');
const router = express.Router();
const { handleRPC } = require('./supabase.js');

//ARTISTS
app.get('/api/artists', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_artists', {});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.get('/api/artists/:ref', async (req, res) => {
    const {data, error} = await supabase
        .rpc('artist_by_ref', {artist_id: req.params.ref});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
}
);

app.get('/api/artists/lastname/:lastname', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_artists_by_lastname', {lname: req.params.lastname});
    if (error) {
        res
            .status(500)
            .send(error.message);
    }
    else {
        res.send(data);
    }
});

app.get('/api/artists/nationality/:national', async (req, res) => {
    const {data, error} = await supabase
        .rpc('get_artists_by_nationality', {nation: req.params.national});
    if (error) {
        res
            .status(500
            ).send(error.message);
    }
    else {
        res.send(data);
    }
});