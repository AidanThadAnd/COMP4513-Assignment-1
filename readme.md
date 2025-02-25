# Painting API
This project is an API which queries a Supabase instance using Node.

## Built with
- **Node Js** - JS runtime
- **Express** - Routing
- **Glitch** - Backend hosting service
- **Supabase** - Database hosting service

## API Endpoints

|**API Endpoint**|**Description**|
|---|---|
|/api/eras|Returns all the eras|
|/api/galleries|Returns all the galleries|
|/api/galleries/:ref|Returns just the specified gallery|
|/api/galleries/country/:substring|Returns the galleries whose galleryCountry (case insensitive) begins with the provided substring|
|/api/artists|Returns all the artists|
|/api/artists/:ref|Returns just the specified artist (use the artistId field)|
|/api/artists/lastname/:lastname|Returns the artists whose last name (case insensitive) begins with the provided substring|
|/api/artists/nationality/:national|Returns the artists whose nationality (case insensitive) begins with the provided substring|
|/api/paintings|eturns all the paintings|
|/api/paintings/sort/:value|Returns all the paintings, sorted by either title or yearOfWork|
|/api/paintings/|Returns just the specified painting,|
|/api/paintings/search/:substring|Returns the paintings whose title (case insensitive) contains the provided substring|
|/api/paintings/years/:start/:end|Returns the paintings between two years|
|/api/paintings/galleries/:ref|Returns all the paintings in a given gallery|
|/api/paintings/artists/:ref|Returns all the paintings by a given artist|
|/api/paintings/artists/country/:country|Returns all the paintings by artists whose nationality begins with the provided substring|
|/api/paintings/era/:ref|Returns all the paintings for a given era|
|/api/paintings/genre/:ref|Returns all the paintings for a given genre |
|/api/genres|Returns all the genres.|
|/api/genres/:ref|Returns just the specified genre |
|/api/genres/painting/:ref|Returns the genres used in a given painting|
|/api/counts/topgenres/:ref|Returns the genre name and the number of paintings for each genre|
|/api/counts/artists|Returns the artist name and the number of paintings for each artis|
|/api/counts/genres|Returns the genre name and the number of paintings for each genre|

### Test links
- https://familiar-enshrined-crustacean.glitch.me/api/eras
- https://familiar-enshrined-crustacean.glitch.me/api/galleries
- https://familiar-enshrined-crustacean.glitch.me/api/galleries/30
- https://familiar-enshrined-crustacean.glitch.me/api/galleries/Calgary
- https://familiar-enshrined-crustacean.glitch.me/api/galleries/country/fra
- https://familiar-enshrined-crustacean.glitch.me/api/artists
- https://familiar-enshrined-crustacean.glitch.me/api/artists/12
- https://familiar-enshrined-crustacean.glitch.me/api/artists/1223423
- https://familiar-enshrined-crustacean.glitch.me/api/artists/search/ma
- https://familiar-enshrined-crustacean.glitch.me/api/artists/search/mA
- https://familiar-enshrined-crustacean.glitch.me/api/artists/country/fra
- https://familiar-enshrined-crustacean.glitch.me/api/paintings
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/sort/year
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/63
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/search/port
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/search/pORt
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/search/connolly
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/years/1800/1850
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/galleries/5
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/artist/16
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/artist/666
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/artist/country/ital
- https://familiar-enshrined-crustacean.glitch.me/api/genres
- https://familiar-enshrined-crustacean.glitch.me/api/genres/76
- https://familiar-enshrined-crustacean.glitch.me/api/genres/painting/408
- https://familiar-enshrined-crustacean.glitch.me/api/genres/painting/jsdfhg
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/genre/78
- https://familiar-enshrined-crustacean.glitch.me/api/paintings/era/2
- https://familiar-enshrined-crustacean.glitch.me/api/counts/genres
- https://familiar-enshrined-crustacean.glitch.me/api/counts/artists
- https://familiar-enshrined-crustacean.glitch.me/api/counts/topgenres/20
- https://familiar-enshrined-crustacean.glitch.me/api/counts/topgenres/2034958

