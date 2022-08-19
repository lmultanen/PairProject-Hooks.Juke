const db = require("./db");
const Album = require("./album");
const Artist = require("./artist");
const Song = require("./song");

Artist.hasMany(Album);
Album.belongsTo(Artist);
Album.hasMany(Song);
Song.belongsTo(Album);
Artist.hasMany(Song);
Song.belongsTo(Artist);

module.exports = {
  db,
  Album,
  Artist,
  Song,
};
