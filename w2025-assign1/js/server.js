const supa = require('@supabase/supabase-js');

const supaUrl = 'https://kyucgqiddevclgzuvvii.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt5dWNncWlkZGV2Y2xnenV2dmlpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczOTkyMzU4OSwiZXhwIjoyMDU1NDk5NTg5fQ.l_DIk6gMVeoT-vtvcpVichuqb17c4XQknQXue2vIy_Y"
const supabase = supa.createClient(supaUrl, supabaseKey);


const express = require('express');
const app = express();

//GALLERIES

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
    /*
    let sortType = 0;
    if (req.params.value === 'year') {
        sortType = 1;
    }
    */
    const {data, error} = await supabase
        .rpc('get_paintings_custom_sort', {sort: req.params.value});
    if (error) {
        res.status(500).send(error.message);
    } else {
        res.send(data);
    }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
