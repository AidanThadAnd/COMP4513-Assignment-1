const supa = require('@supabase/supabase-js');

const supaUrl = 'https://kyucgqiddevclgzuvvii.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dWNncWlkZGV2Y2xnenV2dmlpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTkyMzU4OSwiZXhwIjoyMDU1NDk5NTg5fQ.l_DIk6gMVeoT-vtvcpVichuqb17c4XQknQXue2vIy_Y"
const supabase = supa.createClient(supaUrl, supabaseKey);


const express = require('express');
const app = express();


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


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
