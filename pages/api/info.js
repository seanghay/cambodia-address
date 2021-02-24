const { resolveCoordinate } = require("@pigeon-media/cambodia-address");

module.exports = (req, res) => {
  const { lat, lng } = req.query;
  const point = {
    lat: +lat,
    lng: +lng,
  };

  if (isNaN(point.lat) || isNaN(point.lng)) {
    res.json([]);
    return;
  }

  let level = req.query.level;
  if (level) {
    level = +level;
  }

  try {
    const result = resolveCoordinate(point, level);
    res.json(result);
  } catch (e) {
      res.status(400).json({ message: 'error'});
  }
};
