const router = require("express").Router();
const { Album, Artist, Song } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const albums = await Album.findAll({
      include: {
        model: Artist,
      },
    });
    res.send(albums);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const album = await Album.findByPk(req.params.id, {
      include: [
        {
          model: Artist,
        },
        {
          model: Song,
        },
      ],
    });
    res.send(album);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
